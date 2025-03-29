import { Component, OnInit } from '@angular/core';
import { EventClass } from '../Class/EventClass';
import { FormsModule } from '@angular/forms';
import {EventCreaterService} from '../service/event-creater.service'

@Component({
  selector: 'app-configure',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss'],
})
export class ConfigureComponent implements OnInit {
  event: EventClass = new EventClass();

  constructor(private eventService : EventCreaterService ) {}

  ngOnInit(): void {}

  passInput() {
    console.log(this.event);
    this.eventService.createEvent(this.event).subscribe(data=>{
      alert("")
    },error=>alert("Login Successfuly"))
    
  }
}
