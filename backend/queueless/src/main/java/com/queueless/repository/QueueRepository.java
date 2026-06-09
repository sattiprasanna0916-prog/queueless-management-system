package com.queueless.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.queueless.entity.Queue;

public interface QueueRepository
        extends JpaRepository<Queue, Long> {
}