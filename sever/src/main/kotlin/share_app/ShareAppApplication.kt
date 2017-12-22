package share_app

import spark.Spark.get
import db.*
import model.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.transactions.transaction

fun main(args: Array<String>) {
  DBconnect()
  get("/user/:id"){ request, response ->
     GetUser(request.params("id").toInt())
  }
  get("/users"){ request, response ->
      makeUser(request.queryParams("name"),request.queryParams("id").toInt(),request.queryParams("pass"))
  }
}
