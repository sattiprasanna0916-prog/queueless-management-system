package com.queueless.controller;

import org.springframework.messaging.simp.SimpMessagingTemplate;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/live")
@CrossOrigin("*")
public class QueueUpdateController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @PostMapping("/update")
    public String updateQueue(
            @RequestBody String message) {

        messagingTemplate.convertAndSend(
                "/topic/queue",
                message
        );

        return "Queue Updated";
    }
}