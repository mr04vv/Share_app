package shareApp.controller

import spark.*
import shareApp.model.*
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class TaskController {

    fun getTask(): Route = Route { req, _ ->
        getTask(req.params("id").toInt())
    }

    fun getTaskList(): Route = Route { req, _ ->
        getTaskListbyId(req.queryParams("group").toInt())
    }

    fun addTask(): Route = Route { req, _ ->
        addTask(jacksonObjectMapper().readValue(req.body()))
    }
}
