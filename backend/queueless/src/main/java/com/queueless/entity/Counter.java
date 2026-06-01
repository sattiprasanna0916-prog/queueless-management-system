package com.queueless.entity;

import jakarta.persistence.*;

@Entity
public class Counter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String counterName;

    private Integer currentLoad;

    // Getters & Setters
}
