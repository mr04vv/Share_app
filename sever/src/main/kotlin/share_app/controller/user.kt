package controller

import model.*
import spark.*
import com.google.gson.Gson
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class UserController {


  fun getUser(): Route = Route { req, _ ->
    model.GetUser(req.queryParams("id").toInt())
  }

  fun getUserMe(): Route = Route { req, _ ->
    model.GetUser(FindUserIdByToken(req.headers("token")))

  }

  fun getUserList(): Route = Route { req, _ ->
    model.GetUserList(req.params("id").toInt())
  }

  fun addUser() : Route = Route { req, _ ->
    model.AddUser(jacksonObjectMapper().readValue(req.body()))
  }

  fun login() : Route = Route { req, _ ->
    model.Login(jacksonObjectMapper().readValue(req.body()))
  }
}
