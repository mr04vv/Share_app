package shareApp.model

import org.jetbrains.exposed.sql.SqlExpressionBuilder.eq
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.select
import org.jetbrains.exposed.sql.transactions.transaction
import shareApp.model.User_t.id
import spark.Spark
import sun.rmi.runtime.Log

data class LineUser (
        var id: Int = 0,
        var name: String = "",
        var token: String = ""
)

fun addUserByLine(u: LineUser): ResponseUserData {

    transaction {
        try {
            u.id = User_t.insert {
                it[name] = u.name
                it[password] = u.token
            } get User_t.id
        } catch (e: Exception) {
            throw Spark.halt(400, "this name is already exist") //大概ユーザー名被り
        }
    }
    return ResponseUserData(u.id, u.name, null)
}

fun getUserByLine(id: Int): ResponseUserData {
    var group: Group
    val group_id: MutableList<Group> = mutableListOf()
    lateinit var user: User
    transaction {
        User_t.select {
            User_t.id.eq(id)
        }.forEach {
                    user = User(it[User_t.id], it[User_t.name]
                            , it[User_t.password])
                }

        if (user == null) throw Spark.halt(404, "is not exist")
//      ここでエラー処理　書き直す TODO

        (GroupMember_t innerJoin Group_t).slice(GroupMember_t.group_id, Group_t.name).select { GroupMember_t.user_id.eq(user.id) }.forEach {
            group = Group(it[GroupMember_t.group_id], it[Group_t.name])
            group_id += group
        }
    }

    return ResponseUserData(user.id, user.name, group_id)
}

fun findUserByUserId(t: String): Int {
    var id: Int = 0
    transaction {
        User_t.select {
            User_t.password.eq(t)
        }.forEach {
                    id = it[User_t.id]
                }
    }
    if (id == 0) throw Spark.halt(404, "is not exist")
//    ここでエラー処理 書き直す
//    TODO
    return id
}