package com.queueless.controller;

import com.queueless.service.NotificationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notifications")
@CrossOrigin("*")
public class NotificationController {

    private final NotificationService notificationService;

    public NotificationController(
            NotificationService notificationService) {

        this.notificationService = notificationService;
    }

    @PostMapping("/send")
    public String sendNotification() {

        return notificationService.sendQueueAlert(
                "test@gmail.com",
                "A101"
        );
    }
}