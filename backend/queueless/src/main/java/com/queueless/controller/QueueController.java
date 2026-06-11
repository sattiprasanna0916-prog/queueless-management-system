package com.queueless.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.queueless.entity.Queue;
import com.queueless.repository.QueueRepository;

@RestController
@RequestMapping("/api/queues")
@CrossOrigin(origins = "http://localhost:5173")
public class QueueController {

    @Autowired
    private QueueRepository queueRepository;

    @GetMapping
    public List<Queue> getAllQueues() {
        return queueRepository.findAll();
    }

    @PostMapping
    public Queue createQueue(@RequestBody Queue queue) {
        return queueRepository.save(queue);
    }

    @DeleteMapping("/{id}")
    public String deleteQueue(@PathVariable Long id) {

        queueRepository.deleteById(id);

        return "Queue Deleted Successfully";
    }
}