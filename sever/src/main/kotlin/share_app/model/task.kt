package model

import spark.Spark.*
import db.*
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.*
import org.jetbrains.exposed.sql.SchemaUtils.create
import org.jetbrains.exposed.sql.SchemaUtils.drop
import org.jetbrains.exposed.sql.statements.*
import java.sql.Connection
import org.joda.time.DateTime


object Task_t : Table("tasks") {
    val id = integer("id").autoIncrement().primaryKey()
    val title = varchar("title", 50)
    val group_id = integer("group_id")
    val done = bool("done")
    val dead = datetime("dead_line").nullable()
}

data class Task (
    var id : Int = 0,
    var title : String = "",
    var group_id : Int = 0,
    var done : Boolean = false,
    var dead : DateTime? = DateTime()
)

data class Tasks (
    var main : Task? = null
  )

fun GetTask(id : Int): Task {
  var task = Task()
  transaction{
    Task_t.select {
      Task_t.id.eq(id)
    }.forEach {
      task = Task(it[Task_t.id],it[Task_t.title]
        ,it[Task_t.group_id],it[Task_t.done])
    }
  }
  if(task.id == 0)throw halt(404)
  return task
}

fun GetTaskList(): MutableList<Tasks> {
  var task = Task()
  val tasks :MutableList<Tasks> = mutableListOf()
  var main = Tasks()
  transaction{
    Task_t.selectAll().forEach{
      task = Task(it[Task_t.id],it[Task_t.title],
        it[Task_t.group_id],it[Task_t.done],it[Task_t.dead])
      main = Tasks(task)
      tasks += main
    }
  }
  return tasks
}
