package com.queueless.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.queueless.entity.Token;
import com.queueless.repository.TokenRepository;
import com.queueless.service.NotificationService;
@RestController
@RequestMapping("/api/tokens")
@CrossOrigin(origins = "http://localhost:5173")
public class TokenController {

    @Autowired
    private TokenRepository tokenRepository;
    @Autowired
private NotificationService notificationService;
@Autowired
private SimpMessagingTemplate messagingTemplate;
    @GetMapping
    public List<Token> getTokens() {
        return tokenRepository.findAll();
    }
   @GetMapping("/user/{email}")
public List<Token> getUserTokens(
        @PathVariable String email) {

    return tokenRepository.findByEmail(
            email
    );
}
    @PostMapping
public Token createToken(
        @RequestBody Token token) {

    String generatedToken =
            "A" + (100 + tokenRepository.count() + 1);

    token.setTokenNumber(
            generatedToken
    );

    token.setStatus(
            "WAITING"
    );

    if (tokenRepository.count() % 2 == 0) {
        token.setAssignedCounter(
                "Counter 1"
        );
    } else {
        token.setAssignedCounter(
                "Counter 2"
        );
    }

    return tokenRepository.save(
            token
    );
}
    @PutMapping("/{id}/call")
    public Token callToken(
            @PathVariable Long id) {

        Token token =
                tokenRepository.findById(id)
                        .orElseThrow();

        token.setStatus("SERVING");
        notificationService.sendQueueAlert(
        token.getEmail(),
        token.getTokenNumber()+"Token serving..."
);

messagingTemplate.convertAndSend(
        "/topic/queue",
        "Notification Created"
);
        return tokenRepository.save(token);
    }

    @PutMapping("/{id}/complete")
    public Token completeToken(
            @PathVariable Long id) {

        Token token =
                tokenRepository.findById(id)
                        .orElseThrow();

        token.setStatus("COMPLETED");
         notificationService.createNotification(
        "Token " +
        token.getTokenNumber() +
        " completed successfully"
);

messagingTemplate.convertAndSend(
        "/topic/queue",
        "Notification Created"
);
        return tokenRepository.save(token);
    }
}