package controller

import spark.*
import model.*

class TaskController{

  fun getTask(): Route = Route { req, res ->
    val id = req.params("id").toInt()
    model.GetTask(id)
  }

  fun getTaskList(): Route = Route { req, res ->
    model.GetTaskList()
  }

}
