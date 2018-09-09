package ru.impressionbit.server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import ru.impressionbit.server.domain.User;
import ru.impressionbit.server.service.ORMUserService;

import java.util.List;

@RepositoryRestController
@Controller
public class RestController {

    private final ORMUserService ormUserService;

    @Autowired
    public RestController(ORMUserService ormUserService) {
        this.ormUserService = ormUserService;
    }

    @RequestMapping(
            value = "/api/rest",
            method = RequestMethod.GET)
    @ResponseBody
    public List<User> ormFindAllUsers() {
        return ormUserService.queryFindAllUsersJPA();
    }

    @RequestMapping(
            value = "/api/rest",
            method = RequestMethod.PUT)
    @ResponseBody
    public List<User> ormInsertUserById(
            @RequestParam(value = "name") String name,
            @RequestParam(value = "role") String role,
            @RequestParam(value = "password") String password
    ) {
        return ormUserService.insertUser(name, role, password);
    }

    @RequestMapping(
            value = "/api/rest",
            method = RequestMethod.DELETE)
    @ResponseBody
    public List<User>  ormDeleteUserById(@RequestParam(value = "id") Integer id) {
        return ormUserService.deleteUserById(id);
    }

}
