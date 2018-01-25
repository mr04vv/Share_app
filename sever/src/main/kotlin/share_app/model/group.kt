package model
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create
import spark.Spark.halt

object Group_t : Table("groups") {
    val id = integer("id").autoIncrement().primaryKey()
    val name = varchar("name", 50)
}

object GroupMember_t : Table("group_members") {
    val id = integer("id").autoIncrement().primaryKey()
    val group_id = (integer("group_id") references Group_t.id)
    val user_id = (integer("user_id") references User_t.id)
}

data class GroupMember(
  var id : Int? = 0,
  var name :String =""
  )

data class Group(
    var id : Int? = null,
    var name : String? = null
)

fun addGroup(name : String?) : Group{
    lateinit var group : Group

    transaction {
        group = Group(Group_t.insert {
            it[Group_t.name] = name
        } get Group_t.id,name)
    }
    if(group.id == 0) throw halt(400,"can't create group")
    return group
}