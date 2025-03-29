import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../service/share-user-data.service'
import { FormsModule } from '@angular/forms';
import { User } from '../Class/user';
import { VendorService } from '../service/vendor.service';
import { Router } from '@angular/router';
import { TotalWigetComponent } from '../home/total-wiget/total-wiget.component';


@Component({
  selector: 'app-buy-ticket',
  standalone: true,
  imports: [FormsModule,TotalWigetComponent],
  templateUrl: './buy-ticket.component.html',
  styleUrl: './buy-ticket.component.scss'
})
export class BuyTicketComponent {


  user : User = new User();

  // Variables to store user data
  Username: string = '';
  UserId: string = '';
  UserType: string = '';

  ticketInterval: number=0;
  ticketsPerIssue: number=0
  lastMinuteTickets: number=0;
  generalTickets:number=0;
  earlyBirdTickets:number=0;


  constructor(
    private sharedDataService: SharedDataService,
    private vendorService: VendorService,
    private router: Router,

  ) {}

  ngOnInit() {
    // Subscribe to SharedDataService to get user data
    this.sharedDataService.userData$.subscribe((data) => {
      if (data) {
        this.Username = data.Username;
        this.UserId = data.UserId;
        this.UserType = data.UserType;
        
      }
    });
  }


  submitTicketIssueForm() {
    
    this.user = new User(
      this.UserId,
      this.Username,
      this.UserType,
      this.earlyBirdTickets,
      this.generalTickets,
      this.lastMinuteTickets,
      this.ticketsPerIssue,
      this.ticketInterval
    );

    this.vendorService.saveVendor(this.user).subscribe(
      (response) => {
        console.log(this.user)
        console.log('User saved successfully', response);
        this.router.navigate(['/Home']); 
      },
      (error) => {
        console.error('Error saving user', error);
      }
    );
  }

}
