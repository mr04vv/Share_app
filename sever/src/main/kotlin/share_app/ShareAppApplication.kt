package share_app

import spark.Spark.*
import db.*
import controller.*
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.registerKotlinModule


fun main(args: Array<String>) {
  
  val toJson = JsonTransformer(ObjectMapper().registerKotlinModule())
  
  DBconnect() //データベース接続
  Filter() //cors許容

  path("/users"){
    get("",UserController().getUser(),toJson)
    get("/me",UserController().getUserMe(),toJson)
    get("/group/:id",UserController().getUserList(),toJson)
    post("",UserController().addUser(),toJson)
  }

  path("/login"){
    post("",UserController().login(),toJson)
  }

  path("groups"){
    post("",GroupController().AddGroup(),toJson)
  }

  path("/tasks"){
    get("/:id",TaskController().getTask(),toJson)
    get("",TaskController().getTaskList(),toJson)
    post("",TaskController().addTask(),toJson)
  }
}
