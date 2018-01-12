package share_app

import spark.Spark.*


fun Filter(){
//cors許容
before("*", { req, res ->
  res.header("Content-Type","application/json")
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin")
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
  })
}
