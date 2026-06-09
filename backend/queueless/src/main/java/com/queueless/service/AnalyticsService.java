package com.queueless.service;

import com.queueless.dto.AnalyticsResponse;
import com.queueless.repository.CounterRepository;
import com.queueless.repository.QueueRepository;
import com.queueless.repository.UserRepository;

import org.springframework.stereotype.Service;

@Service
public class AnalyticsService {

    private final QueueRepository queueRepository;
    private final UserRepository userRepository;
    private final CounterRepository counterRepository;

    public AnalyticsService(
            QueueRepository queueRepository,
            UserRepository userRepository,
            CounterRepository counterRepository) {

        this.queueRepository = queueRepository;
        this.userRepository = userRepository;
        this.counterRepository = counterRepository;
    }

    public AnalyticsResponse getAnalytics() {

        int totalQueues =
                (int) queueRepository.count();

        int totalUsers =
                (int) userRepository.count();

        int activeCounters =
                (int) counterRepository.count();

        return new AnalyticsResponse(
                totalQueues,
                totalUsers,
                activeCounters
        );
    }
}