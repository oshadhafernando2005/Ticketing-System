package com.example.demo.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Event")
public class Configuration {

    @Id
    private int maxTicket;
    private int totalTicket;
    private int receiveRate;
    private int retrieveRate;

    private String eventName;      // Matches Angular's eventName
    private String eventType;      // Matches Angular's eventType

    public Configuration() {
    }

    // Constructor
    public Configuration(int maxTicket, int receiveRate, int retrieveRate, String eventName, String eventType) {
        this.maxTicket = maxTicket;
        this.receiveRate = receiveRate;
        this.retrieveRate = retrieveRate;
        this.eventName = eventName;
        this.eventType = eventType;
    }

    // Getters and Setters
    public int getMaxTicket() {
        return maxTicket;
    }

    public void setMaxTicket(int maxTicket) {
        this.maxTicket = maxTicket;
    }

    public int getTotalTicket() {
        return totalTicket;
    }

    public void setTotalTicket(int totalTicket) {
        this.totalTicket = totalTicket;
    }

    public int getReceiveRate() {
        return receiveRate;
    }

    public void setReceiveRate(int receiveRate) {
        this.receiveRate = receiveRate;
    }

    public int getRetrieveRate() {
        return retrieveRate;
    }

    public void setRetrieveRate(int retrieveRate) {
        this.retrieveRate = retrieveRate;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }
}
