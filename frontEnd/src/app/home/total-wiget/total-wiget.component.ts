
import { Component, OnInit } from '@angular/core';
import { EventCreaterService } from '../../service/configure2.service'; 

@Component({
  selector: 'app-total-wiget',
  standalone: true,
  imports: [],
  templateUrl: './total-wiget.component.html',
  styleUrl: './total-wiget.component.css',
  providers: [EventCreaterService]
})

export class TotalWigetComponent implements OnInit {
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
    this.eventService.getTotalTicket().subscribe(
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
