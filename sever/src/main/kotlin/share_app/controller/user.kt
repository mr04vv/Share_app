package controller

import model.*
import spark.*

class UserController {

  fun getUser(): Route = Route { req, res ->
    val id = req.params("id").toInt()
    model.GetUser(id)
  }

  fun getUsetList(): Route = Route { req, res ->
    model.GetUserList()
  }
}
