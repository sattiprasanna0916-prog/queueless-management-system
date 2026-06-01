package com.queueless.service;

public class CounterService {

    public int allocateCounter(
            int counter1,
            int counter2) {

        if(counter1 < counter2) {
            return 1;
        }

        return 2;
    }
}