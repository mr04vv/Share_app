package controller

import spark.*
import model.*

class TaskController{

  fun getTask(): Route = Route { req, _ ->
    val id = req.params("id").toInt()
    model.GetTask(id)
  }

  fun getTaskList(): Route = Route { _, _ ->
    model.GetTaskList()
  }

}
