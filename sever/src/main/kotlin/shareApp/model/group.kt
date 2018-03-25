package shareApp.model

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import spark.Spark.halt

object Group_t : Table("groups") {
    val id = integer("id").autoIncrement().primaryKey()
    val name = varchar("name", 50)
}

object GroupMember_t : Table("group_members") {
    val id = integer("id").autoIncrement().primaryKey()
    val group_id = integer("group_id").references(Group_t.id, ReferenceOption.CASCADE)
    val user_id = integer("user_ida").references(User_t.id, ReferenceOption.CASCADE)
}

data class GroupMember(
        var id: Int? = 0,
        var name: String = ""
)

data class Group(
        var id: Int? = null,
        var name: String? = null
)

fun addGroup(group: Group): Group {

    transaction {
        group.id = Group_t.insert {
            it[Group_t.name] = group.name
        } get Group_t.id
    }
    if (group.id == 0) throw halt(400, "can't create group")
    return group
}