
package com.queueless.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "counters")
public class Counter {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)
    private Long id;

    private String counterName;

    private int currentLoad;

    public Counter() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCounterName() {
        return counterName;
    }

    public void setCounterName(
            String counterName) {

        this.counterName = counterName;
    }

    public int getCurrentLoad() {
        return currentLoad;
    }

    public void setCurrentLoad(
            int currentLoad) {

        this.currentLoad = currentLoad;
    }
}

