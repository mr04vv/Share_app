package controller

import model.*
import spark.*
import com.google.gson.Gson
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class UserController {

  fun getUser(): Route = Route { req, _ ->
    val id = req.params("id").toInt()
    model.GetUser(id)
  }

  fun getUsetList(): Route = Route { _, _ ->
    model.GetUserList()
  }

  fun addUser() : Route = Route { req, res ->
    val gson = Gson()
    val mapper = jacksonObjectMapper()
    val user_d = mapper.readValue<User>(req.body())
    var user = model.User(0,user_d.name,user_d.password)
    model.AddUser(user)
  }

  fun login() : Route = Route { req, res ->
    val gson = Gson()
    val mapper = jacksonObjectMapper()
    val login_u = mapper.readValue<User>(req.body())
    var user = model.User(0,login_u.name,login_u.password)
    model.Login(user)
    model.CreateToken(user.id)
    }
}
