package model
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create

object User : Table("users") {
    val id = integer("id").autoIncrement().primaryKey()
    val name = varchar("name", 50)
}
