package db

import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create
import model.*

fun DBconnect(){
    Database.connect("jdbc:mysql://localhost/share_app", "com.mysql.jdbc.Driver","root","puremia1")
    transaction {
      create(Users)
      create(Task)
      create(Content)
      create(Comment)
      create(Group)
      create(GroupMember)
      create(Token)
    }
}
