package com.queueless.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.queueless.entity.Counter;
import com.queueless.service.CounterService;

@RestController
@RequestMapping("/api/counters")
@CrossOrigin(origins = "http://localhost:5173")
public class CounterController {

    private final CounterService counterService;

    public CounterController(
            CounterService counterService) {

        this.counterService = counterService;
    }

    @GetMapping
    public List<Counter> getCounters() {
        return counterService.getAllCounters();
    }

    @PostMapping
    public Counter createCounter(
            @RequestBody Counter counter) {

        return counterService.createCounter(
                counter
        );
    }

    @PutMapping("/{id}/increase")
    public Counter increaseLoad(
            @PathVariable Long id) {

        return counterService.increaseLoad(id);
    }

    @PutMapping("/{id}/decrease")
    public Counter decreaseLoad(
            @PathVariable Long id) {

        return counterService.decreaseLoad(id);
    }

    @DeleteMapping("/{id}")
    public String deleteCounter(
            @PathVariable Long id) {

        counterService.deleteCounter(id);

        return "Counter Deleted Successfully";
    }

    @GetMapping("/allocate")
    public Counter allocateCounter() {
        return counterService.allocateCounter();
    }
}