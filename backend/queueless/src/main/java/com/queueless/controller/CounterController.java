package com.queueless.controller;

import com.queueless.service.CounterService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/counter")
@CrossOrigin("*")
public class CounterController {

    private final CounterService counterService;

    public CounterController(CounterService counterService) {
        this.counterService = counterService;
    }

    @GetMapping("/allocate")
    public String allocateCounter(
            @RequestParam int counter1,
            @RequestParam int counter2) {

        int allocated =
                counterService.allocateCounter(
                        counter1,
                        counter2);

        return "Assign user to Counter " + allocated;
    }
}