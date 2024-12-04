package com.todo.restful_web_services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCryptEncoderTest {
    public static void main(String[] args){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String endcodedString = encoder.encode("test");
        System.out.println(endcodedString);
    }
}
