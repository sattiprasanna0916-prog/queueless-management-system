package com.queueless.controller;

import com.queueless.dto.PredictionResponse;
import com.queueless.service.PredictionService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/prediction")
@CrossOrigin("*")
public class PredictionController {

    private final PredictionService predictionService;

    public PredictionController(
            PredictionService predictionService) {

        this.predictionService = predictionService;
    }

    @GetMapping
    public PredictionResponse getPrediction() {

        Integer peopleAhead = 6;

        Double avgServiceTime = 3.0;

        Double estimatedTime =
                predictionService
                        .calculateWaitTime(
                                peopleAhead,
                                avgServiceTime
                        );

        return new PredictionResponse(
                peopleAhead,
                avgServiceTime,
                estimatedTime,
                predictionService.recommendCounter()
        );
    }
}