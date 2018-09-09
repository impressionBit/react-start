package ru.impressionbit.server.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping("/application/**")
    public String forward() {
        return "forward:/";
    }

}