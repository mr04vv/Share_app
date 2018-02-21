package model

import spark.Spark.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.*


object User_t : Table("users") {
    val id = integer("id").autoIncrement().primaryKey()
    val name = varchar("name", 50).uniqueIndex()
    val password = varchar("password",100)
}

data class User(
    var id : Int = 0,
    var name : String = "",
    var password : String = ""
  )




data class ResponseUserData(
    var id : Int = 0,
    var name : String = "",
    var group : MutableList<Group>? = null
  )

data class ResponseUserDataWithToken(
    var id : Int = 0,
    var name : String = "",
    var group : MutableList<Group>? = null,
    var token : String? = null
  )

fun Login(u : User): ResponseUserDataWithToken {
  lateinit var group: Group
  val group_id :MutableList<Group> = mutableListOf()

  u.password = HashString("SHA-256",u.password)

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
  var token = CreateToken(u.id)
  return ResponseUserDataWithToken(u.id,u.name,group_id,token)
}

fun AddUser(u : User): ResponseUserData {
  u.password = HashString("SHA-256",u.password)
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
  var group: Group
  val group_id :MutableList<Group> = mutableListOf()
  lateinit var user : User
  transaction{
    User_t.select {
    User_t.id.eq(id)
    }.forEach {
      user = User(it[User_t.id],it[User_t.name]
        ,it[User_t.password])
    }

      if(user == null)throw halt(404,"is not exist")
//      ここでエラー処理　書き直す TODO

    (GroupMember_t innerJoin Group_t).slice(GroupMember_t.group_id, Group_t.name).
        select {GroupMember_t.user_id.eq(user.id)}.forEach {
        group = Group(it[GroupMember_t.group_id],it[Group_t.name])
        group_id += group
    }
  }

  return ResponseUserData(user.id,user.name,group_id)
}

fun GetUserList(group : Int):MutableList<GroupMember> {
  var user: GroupMember
  val users :MutableList<GroupMember> = mutableListOf()
  transaction{
    (GroupMember_t innerJoin User_t).slice(User_t.id,User_t.name).
      select{
        GroupMember_t.group_id.eq(group)
      }.forEach{
        user = GroupMember(it[User_t.id],it[User_t.name])
        users += user
      }
  }
  return users
}
