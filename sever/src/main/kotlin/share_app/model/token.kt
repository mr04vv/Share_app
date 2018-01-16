package model
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create
import java.util.UUID

object Token_t : Table("tokens"){
    val token = varchar("token",100)
    val user_id = integer("user_id")
}

data class Token(
    val token : String,
    val user_id : Int
  )

fun CreateToken(u_id : Int) :String{
    var uuid = UUID.randomUUID().toString()
    var t = Token(uuid,u_id)
    InsertToken(t)
    return t.token
}

fun InsertToken(t : Token){
    transaction{
      Token_t.insert{
        it[token] = t.token
        it[user_id] = t.user_id
      }
    }
}
