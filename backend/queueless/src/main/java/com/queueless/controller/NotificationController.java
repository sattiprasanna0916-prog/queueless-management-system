package com.queueless.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.queueless.service.NotificationService;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin(origins = "http://localhost:5173")
public class NotificationController {

    private final NotificationService notificationService;

    public NotificationController(
            NotificationService notificationService) {

        this.notificationService =
                notificationService;
    }

    @GetMapping
    public List<String> getNotifications() {
        return notificationService.getNotifications();
    }

    @PostMapping("/create")
    public String createNotification(
            @RequestBody String message) {

        return notificationService
                .createNotification(message);
    }

    @PostMapping("/send")
    public String sendNotification() {

        return notificationService.sendQueueAlert(
                "test@gmail.com",
                "A101"
        );
    }
}