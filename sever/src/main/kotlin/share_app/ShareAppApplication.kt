package share_app

import spark.Spark.*
import db.*
import model.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction
import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.transactions.transaction
import controller.*
import com.fasterxml.jackson.annotation.JsonProperty
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.registerKotlinModule

fun main(args: Array<String>) {
val user_c = UserController()
val task_c = TaskController()
val mapper = ObjectMapper().registerKotlinModule()
val toJson = JsonTransformer(mapper)
  DBconnect()

  path("/users"){
    get("/:id",user_c.getUser(),toJson)
    get("",user_c.getUsetList(),toJson)
  }

  path("/tasks"){
    get("/:id",task_c.getTask(),toJson)
    get("",task_c.getTaskList(),toJson)
  }
}
