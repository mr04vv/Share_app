package controller

import model.*
import spark.*

class UserController {

  fun getUser(): Route = Route { req, _ ->
    val id = req.params("id").toInt()
    model.GetUser(id)
  }

  fun getUsetList(): Route = Route { _, _ ->
    model.GetUserList()
  }
}
