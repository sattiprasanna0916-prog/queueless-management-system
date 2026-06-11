package com.queueless.controller;

import com.queueless.entity.Token;
import com.queueless.repository.TokenRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tokens")
@CrossOrigin(origins = "http://localhost:5173")
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

        token.setStatus("WAITING");

        return tokenRepository.save(token);
    }

    @PutMapping("/{id}/call")
    public Token callToken(
            @PathVariable Long id) {

        Token token =
                tokenRepository.findById(id)
                        .orElseThrow();

        token.setStatus("SERVING");

        return tokenRepository.save(token);
    }

    @PutMapping("/{id}/complete")
    public Token completeToken(
            @PathVariable Long id) {

        Token token =
                tokenRepository.findById(id)
                        .orElseThrow();

        token.setStatus("COMPLETED");

        return tokenRepository.save(token);
    }
}