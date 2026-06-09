package com.queueless.controller;

import com.queueless.entity.Token;
import com.queueless.repository.TokenRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tokens")
@CrossOrigin("*")
public class TokenController {

    @Autowired
    private TokenRepository tokenRepository;

    @GetMapping
    public List<Token> getTokens() {
        return tokenRepository.findAll();
    }

    @PostMapping
    public Token createToken(
            @RequestBody Token token) {

        return tokenRepository.save(token);
    }
}