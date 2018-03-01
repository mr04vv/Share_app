package shareApp.model

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import spark.Spark.halt
import java.util.UUID

object Token_t : Table("tokens") {
    val token = varchar("token", 100)
    val user_id = integer("user_id")
}

data class Token(
        val token: String,
        val user_id: Int
)

fun createToken(u_id: Int): String {
    val uuid = UUID.randomUUID().toString()
    val t = Token(uuid, u_id)
    insertToken(t)
    return t.token
}

fun insertToken(t: Token) {
    transaction {
        Token_t.insert {
            it[token] = t.token
            it[user_id] = t.user_id
        }
    }
}

fun findUserIdByToken(t: String): Int {
    var id: Int = 0
    transaction {
        Token_t.select {
            Token_t.token.eq(t)
        }.forEach {
                    id = it[Token_t.user_id]
                }
    }
    if (id == 0) throw halt(404, "is not exist")
//    ここでエラー処理 書き直す
//    TODO
    return id
}
