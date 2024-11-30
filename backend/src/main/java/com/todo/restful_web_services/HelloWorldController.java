package com.todo.restful_web_services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//Controller
@RestController
public class HelloWorldController {

    // GET
    // URI - /hello-world
    // Method - "Hello World"
    @GetMapping("/hello-world")
    public String helloWorld(){
        return "Hello World";
    }


}
