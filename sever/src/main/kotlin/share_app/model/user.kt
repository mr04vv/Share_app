package model
import spark.Spark.*
import db.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.Join.*
import org.jetbrains.exposed.sql.Table.*
import org.jetbrains.exposed.sql.transactions.*
import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.SchemaUtils.drop
import org.jetbrains.exposed.sql.statements.*
import java.sql.Connection

object User_t : Table("users") {
    val id = integer("id").autoIncrement().primaryKey()
    val name = varchar("name", 50).uniqueIndex()
    val password = varchar("password",30)
}

data class User(
    var id : Int = 0,
    var name : String = "",
    var password : String = ""
  )

data class Group(
    var id : Int? =null,
    var name : String = ""
  )



data class ResponseUserData(
    var id : Int = 0,
    var name : String = "",
    var group : MutableList<Group>? = null
  )

fun Login(u : User): ResponseUserData {
  var group = Group()
  val group_id :MutableList<Group> = mutableListOf()
  transaction{
    User_t.select{
      User_t.name.eq(u.name) and User_t.password.eq(u.password)
    }.forEach {
      u.id = it[User_t.id]
      /* u.group_id = it[User_t.group_id] */
    }
    (GroupMember_t innerJoin Group_t).slice(GroupMember_t.group_id, Group_t.name).
        select {GroupMember_t.user_id.eq(u.id)}.forEach {
        group = Group(it[GroupMember_t.group_id],it[Group_t.name])
        group_id += group
    }
  }
  if(u.id == 0)throw halt(404,"wrong name or pass")
  return ResponseUserData(u.id,u.name,group_id)
}

fun AddUser(u : User): ResponseUserData {
  transaction{
    try{
      u.id = User_t.insert{
        it[name] = u.name
        it[password] = u.password
      } get User_t.id
    } catch(e :Exception){
        throw halt(400,"this name is already exist") //大概ユーザー名被り
    }
  }
  return ResponseUserData(u.id,u.name,null)
}

fun GetUser(id : Int): ResponseUserData {
  var group = Group()
  val group_id :MutableList<Group> = mutableListOf()
  var user = User()
  transaction{
    User_t.select {
    User_t.id.eq(id)
    }.forEach {
      user = User(it[User_t.id],it[User_t.name]
        ,it[User_t.password])
    }
    (GroupMember_t innerJoin Group_t).slice(GroupMember_t.group_id, Group_t.name).
        select {GroupMember_t.user_id.eq(user.id)}.forEach {
        group = Group(it[GroupMember_t.group_id],it[Group_t.name])
        group_id += group
    }
  }
  if(user.id == 0)throw halt(404,"is not exist")
  return ResponseUserData(user.id,user.name,group_id)
}

fun GetUserList():MutableList<ResponseUserData> {
  var group = Group()
  val group_id :MutableList<Group> = mutableListOf()
  var user = ResponseUserData()
  val users :MutableList<ResponseUserData> = mutableListOf()
  val ids :MutableList<Int> = mutableListOf()
  transaction{
    User_t.selectAll().forEach{
      ids += it[User_t.id]
    }
    ids.forEach{
      user = GetUser(it)
      users += user
    }
  }
  return users
}
