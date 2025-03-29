package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Vendors")
public class VendorClass {
    @Id
    private String id;
    private String name;
    private String userType;
    private int earlyBirdTickets ;
    private int generalTickets ;
    private int lastMinuteTickets ;
    private int ticketsPerIssue ;
    private int ticketInterval;

    public VendorClass(){}

    public VendorClass(String id, String name, String userType, int earlyBirdTickets, int generalTickets, int lastMinuteTickets, int ticketsPerIssue, int ticketInterval) {
        this.id = id;
        this.name = name;
        this.userType = userType;
        this.earlyBirdTickets = earlyBirdTickets;
        this.generalTickets = generalTickets;
        this.lastMinuteTickets = lastMinuteTickets;
        this.ticketsPerIssue = ticketsPerIssue;
        this.ticketInterval = ticketInterval;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUserType() {
        return userType;
    }

    public int getEarlyBirdTickets() {
        return earlyBirdTickets;
    }

    public int getGeneralTickets() {
        return generalTickets;
    }

    public int getLastMinuteTickets() {
        return lastMinuteTickets;
    }

    public int getTicketsPerIssue() {
        return ticketsPerIssue;
    }

    public int getTicketInterval() {
        return ticketInterval;
    }
}
