package com.todo.restful_web_services;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {
    private static List<Todo> todosList = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todosList.add(new Todo(++idCounter, "Andrew O", "Learn AWS", new Date(), false));
        todosList.add(new Todo(++idCounter, "Andrew O", "Learn DevOps", new Date(), false));
        todosList.add(new Todo(++idCounter, "Andrew O", "Learn Full Stack Development", new Date(), false));
    }

    public List<Todo> findALl(){
        return todosList;
    }
}
