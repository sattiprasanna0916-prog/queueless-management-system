package com.queueless.controller;

import com.queueless.dto.AnalyticsResponse;
import com.queueless.service.AnalyticsService;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin("*")
public class AnalyticsController {

    private final AnalyticsService analyticsService;

    public AnalyticsController(
            AnalyticsService analyticsService) {

        this.analyticsService = analyticsService;
    }

    @GetMapping
    public AnalyticsResponse getAnalytics() {

        return analyticsService.getAnalytics();
    }
}