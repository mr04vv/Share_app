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
    var token : String? = null,
    var user_id : Int? = 0
  )

fun CreateToken(u_id : Int){
    var uuid = UUID.randomUUID().toString()
    token.user_id = u_id


}

fun InsertToken(t : Token){
    transaction{
      Token_t.insert{
        it[token] = t.token
        it[user_id] = t.user_id
      }
    }
}
