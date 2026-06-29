package com.queueless.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.queueless.entity.Queue;
import com.queueless.entity.Token;
import com.queueless.repository.QueueRepository;
import com.queueless.repository.TokenRepository;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyticsController {

    @Autowired
    private QueueRepository queueRepository;

    @Autowired
    private TokenRepository tokenRepository;

    @GetMapping
    public Map<String, Object> getAnalytics() {

        List<Queue> queues =
                queueRepository.findAll();

        List<Token> tokens =
                tokenRepository.findAll();

        int totalQueues =
                queues.size();

        int totalWaitingUsers =
                queues.stream()
                        .mapToInt(
                                Queue::getWaitingUsers
                        )
                        .sum();

        long completedTokens =
                tokens.stream()
                        .filter(
                                t -> t.getStatus()
                                        .equals("COMPLETED")
                        )
                        .count();

        long pendingTokens =
                tokens.stream()
                        .filter(
                                t -> t.getStatus()
                                        .equals("WAITING")
                        )
                        .count();

        long servingTokens =
                tokens.stream()
                        .filter(
                                t -> t.getStatus()
                                        .equals("SERVING")
                        )
                        .count();

        Map<String, Object> response =
                new HashMap<>();

        response.put(
                "totalQueues",
                totalQueues
        );

        response.put(
                "totalWaitingUsers",
                totalWaitingUsers
        );

        response.put(
                "completedTokens",
                completedTokens
        );

        response.put(
                "pendingTokens",
                pendingTokens
        );

        response.put(
                "servingTokens",
                servingTokens
        );

        return response;
    }
}