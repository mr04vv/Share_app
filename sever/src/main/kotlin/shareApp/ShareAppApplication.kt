package shareApp

import spark.Spark.*
import shareApp.controller.*
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import shareApp.db.dbConnect


fun main(args: Array<String>) {

    val toJson = JsonTransformer(ObjectMapper().registerKotlinModule())
    dbConnect() //データベース接続
    filter() //cors許容

    path("/users") {
        get("", UserController().getUser(), toJson)
        get("/me", UserController().getUserMe(), toJson)
        get("/group/:id", UserController().getUserList(), toJson)
        post("", UserController().addUser(), toJson)
    }

    path("/login") {
        post("", UserController().login(), toJson)
    }

    path("groups") {
        post("", GroupController().addGroup(), toJson)
    }

    path("/tasks") {
        get("/:id", TaskController().getTask(), toJson)
        get("", TaskController().getTaskList(), toJson)
        post("", TaskController().addTask(), toJson)
    }
}
