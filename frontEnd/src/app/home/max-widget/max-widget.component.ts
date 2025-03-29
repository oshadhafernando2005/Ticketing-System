import { Component, OnInit } from '@angular/core';
import { EventCreaterService } from '../../service/configure.service'; 

@Component({
  selector: 'app-max-widget',
  standalone: true,
  imports: [],
  templateUrl: './max-widget.component.html',
  styleUrls: ['./max-widget.component.css'],
  providers: [EventCreaterService], // Make sure to provide the service here if needed
})
export class MaxWidgetComponent implements OnInit {
  count: number = 0;  // Initial count is 0
  target: number = 0; // Target number to increase to

  constructor(private eventService: EventCreaterService) {}

  ngOnInit(): void {
    this.fetchMaxTicket();
  }

  increase() {
    this.count++;
  }

  fetchMaxTicket() {
    this.eventService.getMaxTicket().subscribe(
      (maxTicket: number) => {
        this.target = maxTicket; // Set the target to the number from the backend
        this.animateCount();
      },
      (error) => {
        console.error('Error fetching maxTicket:', error);
      }
    );
  }

  animateCount() {
    const interval = setInterval(() => {
      if (this.count < this.target) {
        this.count++;
      } else {
        clearInterval(interval); // Stop when the target is reached
      }
    }, 50); // Adjust the speed here (lower value for faster increment)
  }
}
