package controller

import spark.*
import model.*
import org.joda.time.DateTime
class TaskController{
  fun getTask(): Route = Route { req, _ ->
    val id = req.params("id").toInt()
    model.GetTask(id)
  }

  fun getTaskList(): Route = Route { _, _ ->
    model.GetTaskList()
  }

  fun addTask() : Route = Route { req, res ->
    var task =model.Task(null,"w",1,true,DateTime(2018,1,1,1,1))
    println(task)
    model.AddTask(task)
  }
}
