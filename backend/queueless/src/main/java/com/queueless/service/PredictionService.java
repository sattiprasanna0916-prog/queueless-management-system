package com.queueless.service;

import org.springframework.stereotype.Service;

@Service
public class PredictionService {

    public Double calculateWaitTime(
            Integer peopleAhead,
            Double averageServiceTime) {

        return peopleAhead * averageServiceTime;
    }

    public String recommendCounter() {

        return "Counter 2";
    }
}