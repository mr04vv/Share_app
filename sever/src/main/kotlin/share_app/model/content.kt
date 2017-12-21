package model
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create

object Content : Table("contents") {
    val id = integer("id").autoIncrement().primaryKey()
    val title = varchar("title", 50)
    val url = varchar("url", 100)
}
