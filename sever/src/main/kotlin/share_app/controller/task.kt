package controller

import spark.*
import model.*
import org.joda.time.DateTime
import com.google.gson.Gson
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class TaskController{
  fun getTask(): Route = Route { req, _ ->
    val id = req.params("id").toInt()
    model.GetTask(id)
  }

  fun getTaskList(): Route = Route { _, _ ->
    model.GetTaskList()
  }

  fun addTask() : Route = Route { req, res ->
    val gson = Gson()
    val mapper = jacksonObjectMapper()
    val task_d = mapper.readValue<ReqTask>(req.body())
    var task =model.Task(null,task_d.title,task_d.group_id,task_d.done,DateTime(2018,1,1,1,1))

    model.AddTask(task)
  }
}
