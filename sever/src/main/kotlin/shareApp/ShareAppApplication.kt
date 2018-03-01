package shareApp

import shareApp.conf.Routes
import shareApp.db.dbConnectHeroku

fun main(args: Array<String>) { 

    // dbConnect() //データベース接続
    dbConnectHeroku()
    filter() //cors許容
    Routes().init()
    
//    path("/users") {
//        get("", UserController().getUser(), toJson)
//        get("/me", UserController().getUserMe(), toJson)
//        get("/groups/:id", UserController().getUserList(), toJson)
//        get("/groups",UserController().getGroups(), toJson)
//        post("", UserController().addUser(), toJson)
//    }
//
//    path("/login") {
//        post("", UserController().login(), toJson)
//    }
//
//    path("groups") {
//        post("", GroupController().addGroup(), toJson)
//    }
//
//    path("/tasks") {
//        get("/:id", TaskController().getTask(), toJson)
//        get("", TaskController().getTaskList(), toJson)
//        post("", TaskController().addTask(), toJson)
//    }
}