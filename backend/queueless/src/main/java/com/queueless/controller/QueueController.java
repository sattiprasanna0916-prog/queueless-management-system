package com.queueless.controller;

import com.queueless.entity.Queue;
import com.queueless.repository.QueueRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/queues")
@CrossOrigin("*")
public class QueueController {

    @Autowired
    private QueueRepository queueRepository;

    @GetMapping
    public List<Queue> getAllQueues() {
        return queueRepository.findAll();
    }

    @PostMapping
    public Queue createQueue(
            @RequestBody Queue queue) {

        return queueRepository.save(queue);
    }
}