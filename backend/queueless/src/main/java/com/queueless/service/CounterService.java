package com.queueless.service;

import org.springframework.stereotype.Service;

@Service
public class CounterService {

    public int allocateCounter(int counter1, int counter2) {

        return (counter1 <= counter2)
                ? 1
                : 2;
    }
}