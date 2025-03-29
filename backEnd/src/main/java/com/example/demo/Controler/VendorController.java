package com.example.demo.Controler;

import com.example.demo.Model.IssueTickets;
import com.example.demo.Model.VendorClass;
import com.example.demo.Service.VendorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vendor")
@CrossOrigin(origins = "http://localhost:4200")
public class VendorController {

    @Autowired
    private VendorService vendorService ;


    @PostMapping("/save")
    public void passVendorLogin(@RequestBody VendorClass vendor){
        VendorClass vendorClass = vendor;
        int totalTickets=vendor.getEarlyBirdTickets()+vendor.getGeneralTickets()+vendor.getLastMinuteTickets();
        vendorService.add(totalTickets);

        //return vendorService.saveVendor(vendor);
    }

}
