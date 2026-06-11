package com.queueless.controller;

import com.queueless.entity.Queue;
import com.queueless.repository.QueueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyticsController {

    @Autowired
    private QueueRepository queueRepository;

    @GetMapping
    public Map<String, Object> getAnalytics() {

        List<Queue> queues = queueRepository.findAll();

        int totalQueues = queues.size();

        int totalWaitingUsers = queues.stream()
                .mapToInt(Queue::getWaitingUsers)
                .sum();

        Map<String, Object> response = new HashMap<>();

        response.put("totalQueues", totalQueues);
        response.put("totalWaitingUsers", totalWaitingUsers);
        response.put("avgWaitTime", "15 mins");

        return response;
    }
}