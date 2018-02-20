package db

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create
import model.*

fun DBconnect(){
    Database.connect("jdbc:mysql://localhost/share_app", "com.mysql.jdbc.Driver","root","puremia1")
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
