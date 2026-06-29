package com.queueless.service;

import com.queueless.dto.LoginRequest;
import com.queueless.dto.RegisterRequest;
import com.queueless.entity.User;
import com.queueless.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(
            RegisterRequest request) {

        User user = new User();

        if (userRepository.findByEmail(
                request.getEmail()
        ).isPresent()) {
            return "Email already exists";
        }

        user.setName(
                request.getName()
        );

        user.setEmail(
                request.getEmail()
        );

        user.setPassword(
                request.getPassword()
        );

        user.setRole(
                request.getRole()
        );

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public Map<String, String> loginUser(
            LoginRequest request) {

        User user =
                userRepository.findByEmail(
                        request.getEmail()
                ).orElse(null);

        Map<String, String> response =
                new HashMap<>();

        if (user == null) {
            response.put(
                    "message",
                    "User Not Found"
            );
            return response;
        }

        if (!user.getPassword().equals(
                request.getPassword()
        )) {
            response.put(
                    "message",
                    "Invalid Password"
            );
            return response;
        }

        response.put(
                "message",
                "Login Successful"
        );

        response.put(
                "role",
                user.getRole()
        );

        response.put(
                "email",
                user.getEmail()
        );

        return response;
    }
}