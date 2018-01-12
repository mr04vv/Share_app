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
  Filter()


  path("/users"){
    get("/:id",user_c.getUser(),toJson)
    get("",user_c.getUsetList(),toJson)
    post("",user_c.addUser(),toJson)
  }

  path("/login"){
    post("",user_c.login(),toJson)
  }

  path("/tasks"){
    get("/:id",task_c.getTask(),toJson)
    get("",task_c.getTaskList(),toJson)
    post("",task_c.addTask(),toJson)
  }
}
