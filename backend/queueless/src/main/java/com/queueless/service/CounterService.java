package com.queueless.service;

import com.queueless.entity.Counter;
import com.queueless.repository.CounterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CounterService {

    private final CounterRepository counterRepository;

    public CounterService(
            CounterRepository counterRepository) {

        this.counterRepository = counterRepository;
    }

    public List<Counter> getAllCounters() {
        return counterRepository.findAll();
    }

    public Counter createCounter(
            Counter counter) {

        return counterRepository.save(counter);
    }

    public Counter increaseLoad(Long id) {

        Counter counter =
                counterRepository.findById(id)
                        .orElseThrow();

        counter.setCurrentLoad(
                counter.getCurrentLoad() + 1
        );

        return counterRepository.save(counter);
    }

    public Counter decreaseLoad(Long id) {

        Counter counter =
                counterRepository.findById(id)
                        .orElseThrow();

        if (counter.getCurrentLoad() > 0) {
            counter.setCurrentLoad(
                    counter.getCurrentLoad() - 1
            );
        }

        return counterRepository.save(counter);
    }

    public void deleteCounter(Long id) {
        counterRepository.deleteById(id);
    }

    public Counter allocateCounter() {

        List<Counter> counters =
                counterRepository.findAll();

        if (counters.isEmpty()) {
            throw new RuntimeException(
                    "No counters available"
            );
        }

        Counter leastLoaded =
                counters.get(0);

        for (Counter counter : counters) {

            if (counter.getCurrentLoad()
                    < leastLoaded.getCurrentLoad()) {

                leastLoaded = counter;
            }
        }

        leastLoaded.setCurrentLoad(
                leastLoaded.getCurrentLoad() + 1
        );

        return counterRepository.save(
                leastLoaded
        );
    }
}