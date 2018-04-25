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
            get("/me/line", UserController().getUserMeByLine(), toJson)
            get("/groups/:id", UserController().getUserList(), toJson)
            get("/groups", UserController().getGroups(), toJson)
            post("", UserController().addUser(), toJson)
            post("/line", UserController().addUserByLine(), toJson)
            put("/line/task/flg/:id",UserController().changeTaskFlag())
        }

        path("/login") {
            post("", UserController().login(), toJson)
        }

        path("groups") {
            post("", GroupController().addGroup(), toJson)
        }

        path("/tasks") {
            get("/:id", TaskController().getTask(), toJson)
            get("/group/", TaskController().getTaskListByGroupId(), toJson)
            get("/user/", TaskController().getTaskListByUserId(), toJson)
            post("", TaskController().addTask(), toJson)
        }

        options("/*"
        ) { request, response ->

            val accessControlRequestHeaders = request
                    .headers("Access-Control-Request-Headers")
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                        accessControlRequestHeaders)
            }

            val accessControlRequestMethod = request
                    .headers("Access-Control-Request-Method")
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods",
                        accessControlRequestMethod)
            }

            "OK"
        }
    }
}