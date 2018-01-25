package controller

import spark.*
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class TaskController{

  fun getTask(): Route = Route { req, _ ->
    model.GetTask(req.params("id").toInt())
  }

  fun getTaskList(): Route = Route { req, _ ->
    model.GetTaskListbyId(req.queryParams("group").toInt())
  }

  fun addTask() : Route = Route { req, _ ->
    model.AddTask(jacksonObjectMapper().readValue(req.body()))
  }
}
