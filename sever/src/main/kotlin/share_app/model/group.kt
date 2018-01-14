package model
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create

object Group_t : Table("groups") {
    val id = integer("id").autoIncrement().primaryKey()
    val name = varchar("name", 50)
}

object GroupMember_t : Table("group_members") {
    val id = integer("id").autoIncrement().primaryKey()
    val group_id = (integer("group_id") references Group_t.id)
    val user_id = integer("user_id")
}
