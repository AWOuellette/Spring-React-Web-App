package com.todo.restful_web_services.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

//    {
//        "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZXciLCJpYXQiOjE3MzMzNDM4NjgsImV4cCI6MTczMzk0ODY2OH0.EUm53Xjv5_psP5RliTLdfHQv7Jq5d3D7vwCLmJSKfYKAun3KyJgUPErTkf0h8mdScS1oaek_yGmu8yS7JIy-nw"
//    }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
