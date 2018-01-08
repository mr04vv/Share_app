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
  val user_c = UserController() //userコントローラ
  val task_c = TaskController() //taskコントローラ
  val mapper = ObjectMapper().registerKotlinModule() //マッパー
  val toJson = JsonTransformer(mapper) //jsonに変換するためのもの

  DBconnect() //データベース接続

  //cors許容
  before("*", { req, res ->
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    })

  path("/users"){
    get("/:id",user_c.getUser(),toJson)
    get("",user_c.getUsetList(),toJson)
  }

  path("/tasks"){
    get("/:id",task_c.getTask(),toJson)
    get("",task_c.getTaskList(),toJson)
  }
}
