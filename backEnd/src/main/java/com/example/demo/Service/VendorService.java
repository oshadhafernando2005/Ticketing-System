package com.example.demo.Service;

import com.example.demo.Model.Event;
import com.example.demo.Model.IssueTickets;
import com.example.demo.Model.VendorClass;
import com.example.demo.Repo.IssueTicketRepo;
import com.example.demo.Repo.VendorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class VendorService {

    @Autowired
    public VendorRepo vendorRepo;

    @Autowired
    public IssueTicketRepo issueTicketRepo;

    public VendorClass saveVendor(VendorClass vendor){
        System.out.println("Saving");
        return vendorRepo.save(vendor);

    }

    public void add(int ticketAmont){

        Event.MaxTicket= Event.MaxTicket-ticketAmont;
        Event.TotalTicket+=ticketAmont;

    }
}
