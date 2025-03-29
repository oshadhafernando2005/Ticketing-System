package com.example.demo.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "IssueTickets")
public class IssueTickets {
    @Id
    private int earlyBirdTickets ;
    private int generalTickets ;
    private int lastMinuteTickets ;
    private int ticketsPerIssue ;
    private int ticketInterval ;

    public IssueTickets(){}

    public IssueTickets(int earlyBirdTickets, int generalTickets, int lastMinuteTickets, int ticketsPerIssue, int ticketInterval) {
        this.earlyBirdTickets = earlyBirdTickets;
        this.generalTickets = generalTickets;
        this.lastMinuteTickets = lastMinuteTickets;
        this.ticketsPerIssue = ticketsPerIssue;
        this.ticketInterval = ticketInterval;
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


