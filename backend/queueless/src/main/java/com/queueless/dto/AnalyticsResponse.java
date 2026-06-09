package com.queueless.dto;

public class AnalyticsResponse {

    private int totalQueues;
    private int totalUsers;
    private int activeCounters;

    public AnalyticsResponse() {
    }

    public AnalyticsResponse(
            int totalQueues,
            int totalUsers,
            int activeCounters) {

        this.totalQueues = totalQueues;
        this.totalUsers = totalUsers;
        this.activeCounters = activeCounters;
    }

    public int getTotalQueues() {
        return totalQueues;
    }

    public void setTotalQueues(int totalQueues) {
        this.totalQueues = totalQueues;
    }

    public int getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(int totalUsers) {
        this.totalUsers = totalUsers;
    }

    public int getActiveCounters() {
        return activeCounters;
    }

    public void setActiveCounters(int activeCounters) {
        this.activeCounters = activeCounters;
    }
}