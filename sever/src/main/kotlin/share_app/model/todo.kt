package model
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create

object Todo : Table("todos") {
    val id = integer("id").autoIncrement().primaryKey()
    val title = varchar("title", 50)
    val contentId = integer("contentId")
}
