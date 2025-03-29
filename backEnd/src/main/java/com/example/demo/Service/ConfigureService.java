package com.example.demo.Service;

import com.example.demo.Model.Configuration;
import com.example.demo.Model.Event;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConfigureService {

    public void setConfiguratoins(int max,int total, int recieve, int retreve){

        Event.MaxTicket=max;
        Event.TotalTicket=total;
        Event.recieveRate=recieve;
        Event.retrevielRate=recieve;
    }


}
