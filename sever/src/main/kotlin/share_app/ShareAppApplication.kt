package share_app

import spark.Spark.get
import db.*

fun main(args: Array<String>) {
  DBconnect()
  get("/hello"){ request, response ->
    "hello world"
  }
}
