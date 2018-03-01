package shareApp.conf

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import shareApp.JsonTransformer
import spark.Spark.*
import shareApp.controller.*

class Routes {

    fun init() {

        val toJson = JsonTransformer(ObjectMapper().registerKotlinModule())
        path("/users") {
            get("", UserController().getUser(), toJson)
            get("/me", UserController().getUserMe(), toJson)
            get("/groups/:id", UserController().getUserList(), toJson)
            get("/groups", UserController().getGroups(), toJson)
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
}