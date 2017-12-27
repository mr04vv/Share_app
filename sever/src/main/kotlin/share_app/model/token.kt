package model
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create

object Token_t : Table("tokens"){
    val token = varchar("token",50)
    val user_id = integer("user_id")
}
