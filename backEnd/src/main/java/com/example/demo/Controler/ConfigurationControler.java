package com.example.demo.Controler;

import com.example.demo.Model.Configuration;
import com.example.demo.Model.Event;
import com.example.demo.Repo.EventRepo;
import com.example.demo.Service.ConfigureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/event")
@CrossOrigin(origins = "http://localhost:4200")
public class ConfigurationControler {

    private Configuration lastEvent;

    private final EventRepo eventRepo;

    @Autowired
    public ConfigurationControler(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    @Autowired
    private ConfigureService configureService;


    @PostMapping("/create")
    public ResponseEntity<String> createEvent(@RequestBody Configuration event) {
        eventRepo.save(event);
        configureService.setConfiguratoins(event.getMaxTicket(),event.getTotalTicket(),event.getReceiveRate(),event.getRetrieveRate());
        this.lastEvent = event; // Store the received event
        System.out.println(Event.MaxTicket+"eeeeeeeeeeeeeeeeeeeeee");
        System.out.println("Received event: " + event.getEventName()); // Print event details in the console

        return ResponseEntity.ok("Event created successfully");
    }

    // GET endpoint to display the last received event as an HTML response
    @GetMapping("/outPut")
    public ResponseEntity<String> showLastEvent() {
        if (lastEvent == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("<html><body><h1>No event has been submitted yet.</h1></body></html>");
        }
        return ResponseEntity.ok("<html>" +
                "<body>" +
                "<h1>Last Submitted Event</h1>" +
                "<p><strong>Event Name:</strong> " + lastEvent.getEventName() + "</p>" +
                "<p><strong>Event Type:</strong> " + lastEvent.getEventType() + "</p>" +
                "<p><strong>Max Ticket:</strong> " + lastEvent.getMaxTicket() + "</p>" +
                "<p><strong>Total Ticket:</strong> " + lastEvent.getTotalTicket() + "</p>" +
                "<p><strong>Receive Rate:</strong> " + lastEvent.getReceiveRate() + "</p>" +
                "<p><strong>Retrieve Rate:</strong> " + lastEvent.getRetrieveRate() + "</p>" +
                "</body>" +
                "</html>");
    }

    // GET endpoint to retrieve the maximum ticket value
    @GetMapping("/getMaxTicket")
    public ResponseEntity<Integer> getMaxTicket() {
        if (lastEvent == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        int modifiedMaxTicket = Event.MaxTicket ; // Example modification
        System.out.println();
        return ResponseEntity.ok(Event.MaxTicket);
    }
    @GetMapping("/getTotalTicket")
    public ResponseEntity<Integer> getTotal() {
        if (lastEvent == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        int modifiedTotalTicket = lastEvent.getMaxTicket() ; // Example modification
        return ResponseEntity.ok(Event.TotalTicket);

    }
}
