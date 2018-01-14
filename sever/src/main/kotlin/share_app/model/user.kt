package model
import spark.Spark.*
import db.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.*
import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.SchemaUtils.drop
import org.jetbrains.exposed.sql.statements.*
import java.sql.Connection

object User_t : Table("users") {
    val id = integer("id").autoIncrement().primaryKey()
    val name = varchar("name", 50).uniqueIndex()
    val group_id = integer("group_id").nullable()
    val password = varchar("password",30)
}

data class User(
    var id : Int = 0,
    var name : String = "",
    var group_id : Int? = null,
    var password : String = ""
  )

data class ResponseUserData(
    var id : Int = 0,
    var name : String = "",
    var group_id : Int? = null
  )

fun Login(u : User): ResponseUserData {
  transaction{
      User_t.select{
        User_t.name.eq(u.name) and User_t.password.eq(u.password)
      }.forEach {
        u.id = it[User_t.id]
        u.group_id = it[User_t.group_id]
      }
  }
  if(u.id == 0)throw halt(404,"wrong name or pass")
  return ResponseUserData(u.id,u.name,u.group_id)
}

fun AddUser(u : User): User {
  transaction{
    try{
      u.id = User_t.insert{
        it[name] = u.name
        it[group_id] = u.group_id
        it[password] = u.password
      } get User_t.id
    } catch(e :Exception){
        throw halt(400,"this name is already exist") //大概ユーザー名被り
    }
  }
  return u
}

fun GetUser(id : Int): User {
  var user = User()
  transaction{
    User_t.select {
    User_t.id.eq(id)
    }.forEach {
      user = User(it[User_t.id],it[User_t.name]
        ,it[User_t.group_id],it[User_t.password])
    }
  }
  if(user.id == 0)throw halt(404,"is not exist")
  return user
}

fun GetUserList():MutableList<User> {
  var user = User()
  val users :MutableList<User> = mutableListOf()
  transaction{
    User_t.selectAll().forEach{
      user = User(it[User_t.id],it[User_t.name]
        ,it[User_t.group_id],it[User_t.password])
      users += user
    }
  }
  return users
}
