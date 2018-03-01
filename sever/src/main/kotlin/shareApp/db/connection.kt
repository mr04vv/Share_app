package shareApp.db

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create
import shareApp.model.*

fun dbConnect() {
    Database.connect("jdbc:mysql://localhost/share_app", "com.mysql.jdbc.Driver", "root", "puremia1")
    transaction {
        create(User_t)
        create(Task_t)
        create(Content_t)
        create(Comment_t)
        create(Group_t)
        create(GroupMember_t)
        create(Token_t)
    }
}

fun dbConnectHeroku() {
    Database.connect("jdbc:postgresql://ec2-184-73-175-95.compute-1.amazonaws.com:5432/d6is229dd8d5he?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory", "com.mysql.jdbc.Driver","gdotzlmesfdrwv","aca5abbf7b12ecbedb441df86f58c254e02373acc1549737918d45a46f230b04")
    transaction {
        create(User_t)
        create(Task_t)
        create(Content_t)
        create(Comment_t)
        create(Group_t)
        create(GroupMember_t)
        create(Token_t)
    }
}
