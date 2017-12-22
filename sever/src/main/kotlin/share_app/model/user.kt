package model
import spark.Spark.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.SchemaUtils.drop
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import db.*
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.IdTable
import org.jetbrains.exposed.sql.statements.*
import org.jetbrains.exposed.sql.transactions.TransactionManager
import java.sql.Connection
import org.jetbrains.exposed.sql.selectAll

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

data class User_s(
  var user : User = User()
  )

fun makeUser(u_name: String, g_id: Int, pass: String) {
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
}

fun GetUser(id : Int): String {
  val mapper = ObjectMapper().registerKotlinModule()
  var user = User()
  transaction{
    Users.select {
    Users.id.eq(id)
    }.forEach {
      user = User(it[Users.id],it[Users.name],it[Users.group_id],it[Users.password])
    }
  }
  if(user.id == 0)throw halt(404)
  return mapper.writeValueAsString(user)
}
