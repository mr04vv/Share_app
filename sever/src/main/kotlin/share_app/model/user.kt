package model
import spark.Spark.*
import db.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.*
import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.SchemaUtils.drop
import org.jetbrains.exposed.sql.statements.*
import java.sql.Connection

object Users : Table("users") {
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


/* fun makeUser(u_name: String, g_id: Int, pass: String) {
  transaction{
    try{
      Users.insert{
        it[name] = u_name
        it[group_id] = if(g_id != 0) g_id else null
        it[password] = pass
      }
    } catch(e :Exception){
        throw halt(400) //大概ユーザー名被り
    }
  }
} */

fun GetUser(id : Int): User {
  var user = User()
  transaction{
    Users.select {
    Users.id.eq(id)
    }.forEach {
      user = User(it[Users.id],it[Users.name],it[Users.group_id],it[Users.password])
    }
  }
  if(user.id == 0)throw halt(404)
  return user
}

fun GetUserList():MutableList<User> {
  var user = User()
  val users :MutableList<User> = mutableListOf()
  transaction{
    Users.selectAll().forEach{
      user = User(it[Users.id],it[Users.name],it[Users.group_id],it[Users.password])
      users += user
    }
  }
  return users
}
