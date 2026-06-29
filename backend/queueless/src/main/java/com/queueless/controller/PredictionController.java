package com.queueless.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.queueless.dto.PredictionResponse;
import com.queueless.service.PredictionService;

@RestController
@RequestMapping("/api/prediction")
@CrossOrigin(origins = "http://localhost:5173")
public class PredictionController {

    private final PredictionService predictionService;

    public PredictionController(
            PredictionService predictionService) {

        this.predictionService = predictionService;
    }

    @PostMapping
    public PredictionResponse getPrediction(
            @RequestBody Map<String, Object> request) {

        Integer peopleAhead =
                (Integer) request.get("peopleAhead");

        Double avgServiceTime =
                Double.valueOf(
                        request.get("avgServiceTime")
                                .toString()
                );

        Double estimatedTime =
                predictionService.calculateWaitTime(
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