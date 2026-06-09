package com.queueless.dto;

public class PredictionResponse {

    private Integer peopleAhead;
    private Double averageServiceTime;
    private Double estimatedWaitTime;
    private String recommendedCounter;

    public PredictionResponse() {
    }

    public PredictionResponse(
            Integer peopleAhead,
            Double averageServiceTime,
            Double estimatedWaitTime,
            String recommendedCounter) {

        this.peopleAhead = peopleAhead;
        this.averageServiceTime = averageServiceTime;
        this.estimatedWaitTime = estimatedWaitTime;
        this.recommendedCounter = recommendedCounter;
    }

    public Integer getPeopleAhead() {
        return peopleAhead;
    }

    public void setPeopleAhead(Integer peopleAhead) {
        this.peopleAhead = peopleAhead;
    }

    public Double getAverageServiceTime() {
        return averageServiceTime;
    }

    public void setAverageServiceTime(Double averageServiceTime) {
        this.averageServiceTime = averageServiceTime;
    }

    public Double getEstimatedWaitTime() {
        return estimatedWaitTime;
    }

    public void setEstimatedWaitTime(Double estimatedWaitTime) {
        this.estimatedWaitTime = estimatedWaitTime;
    }

    public String getRecommendedCounter() {
        return recommendedCounter;
    }

    public void setRecommendedCounter(String recommendedCounter) {
        this.recommendedCounter = recommendedCounter;
    }
}