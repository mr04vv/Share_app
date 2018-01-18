package controller

import model.*
import spark.*
import com.google.gson.Gson
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class UserController {


  fun getUser(): Route = Route { req, _ ->
    val id = req.queryParams("id").toInt()
    model.GetUser(id)
  }

  fun getUserMe(): Route = Route { req, _ ->
    val token = req.headers("token")
    model.GetUser(FindUserIdByToken(token))

  }

  fun getUserList(): Route = Route { req, _ ->
    val group = req.params("id").toInt()
    model.GetUserList(group)
  }

  fun addUser() : Route = Route { req, _ ->
    val mapper = jacksonObjectMapper()
    val user_d = mapper.readValue<User>(req.body())
    var user = model.User(0,user_d.name,user_d.password)
    model.AddUser(user)
  }

  fun login() : Route = Route { req, _ ->
    val mapper = jacksonObjectMapper()
    val login_u = mapper.readValue<User>(req.body())
    var user = model.User(0,login_u.name,login_u.password)
    model.Login(user)
    }
}
