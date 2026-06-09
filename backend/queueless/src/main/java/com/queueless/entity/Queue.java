
package com.queueless.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "queues")
public class Queue {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String currentToken;

    private int waitingUsers;

    public Queue() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCurrentToken() {
        return currentToken;
    }

    public void setCurrentToken(
            String currentToken) {

        this.currentToken = currentToken;
    }

    public int getWaitingUsers() {
        return waitingUsers;
    }

    public void setWaitingUsers(
            int waitingUsers) {

        this.waitingUsers = waitingUsers;
    }
}
