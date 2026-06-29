package com.queueless.controller;

import com.queueless.dto.LoginRequest;
import com.queueless.dto.RegisterRequest;
import com.queueless.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String registerUser(
            @RequestBody RegisterRequest request) {

        return userService.registerUser(
                request
        );
    }

    @PostMapping("/login")
    public Map<String, String> loginUser(
            @RequestBody LoginRequest request) {

        return userService.loginUser(
                request
        );
    }
}