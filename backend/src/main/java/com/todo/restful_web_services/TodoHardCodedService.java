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

    public Todo deleteById(long id){
        Todo todo = findById(id);
        if(todo == null) return null;
        if(todosList.remove(todo)) return todo;
        return null;
    }

    public Todo findById(long id) {
        for(Todo todo: todosList){
            if(todo.getId() == id){
                return todo;
            }
        }

        return null;
    }
}
