package shareApp

import spark.Spark.*


fun filter() {
//cors許容
    before("*", { _, res ->
        res.header("Content-Type", "application/json")
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin")
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS")
    })
}
