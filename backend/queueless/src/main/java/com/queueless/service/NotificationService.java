package com.queueless.service;

import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    public String sendQueueAlert(
            String email,
            String token) {

        return "Notification sent for token " + token;
    }
}