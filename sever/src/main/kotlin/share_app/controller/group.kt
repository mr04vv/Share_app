package controller

import spark.*
import model.*
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class GroupController{

    fun AddGroup(): Route = Route{req, _ ->
        model.addGroup(jacksonObjectMapper().readValue(req.body()))
    }
}