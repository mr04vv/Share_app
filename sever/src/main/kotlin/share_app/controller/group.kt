package controller

import spark.*
import model.*
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper

class GroupController{

    fun AddGroup(): Route = Route{req, _ ->
        val mapper = jacksonObjectMapper()
        val group_d = mapper.readValue<Group>(req.body())
        model.addGroup(group_d.name)
    }
}