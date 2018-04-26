package shareApp.controller

import shareApp.model.*
import spark.*
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class UserController {


    fun getUser(): Route = Route { req, _ ->
        getUser(req.queryParams("id").toInt())
    }

    fun getUserMe(): Route = Route { req, _ ->
        getUser(findUserIdByToken(req.headers("token")))
    }

    fun getUserMeByLine(): Route = Route { req, _ ->
        getUserByLine(findUserByUserId(req.headers("token")))
    }


    fun getUserList(): Route = Route { req, _ ->
        getUserList(req.params("id").toInt())
    }

    fun addUser(): Route = Route { req, _ ->
        addUser(jacksonObjectMapper().readValue(req.body()))
    }

    fun addUserByLine(): Route = Route { req, _ ->
        addUserByLine(jacksonObjectMapper().readValue(req.body()))
    }

    fun login(): Route = Route { req, _ ->
        login(jacksonObjectMapper().readValue(req.body()))
    }

    fun getGroups(): Route = Route { req, _ ->
        getGroups(findUserIdByToken(req.headers("token")))
    }

    fun changeTaskFlag(): Route = Route { req, _ ->
        changeTaskFlag(req.params("id").toInt())
    }

    fun getLineUserList(): Route = Route { _, _ ->
        getLineUsers()
    }
}
