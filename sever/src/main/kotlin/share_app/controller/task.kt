package controller

import spark.*
import spark.Spark.*
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

  fun getTaskList(): Route = Route { req, _ ->
    val id = req.queryParams("group").toInt()
    model.GetTaskListbyId(id)
  }

  fun addTask() : Route = Route { req, _ ->
    val mapper = jacksonObjectMapper()
    val task_d = mapper.readValue<Task>(req.body())
    var task =model.Task(null,task_d.title,task_d.group_id,task_d.done,
      DeadLine(task_d.dead.year,task_d.dead.month,task_d.dead.day))
    model.AddTask(task)
  }
}
