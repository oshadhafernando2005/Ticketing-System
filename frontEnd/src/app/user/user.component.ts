import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Class/user';
import { FormsModule } from '@angular/forms';
import { response } from 'express';
import { SharedDataService } from '../service/share-user-data.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {


  Username: string='';
  UserId: string='';
  UserType: string = '';


  constructor(
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}
  
  user: User = new User ();

  submitForm() {
    this.sharedDataService.setUserData({
      Username: this.Username,
      UserId: this.UserId,
      UserType: this.UserType,
    });
  
    console.log('User Data Shared:', this.UserType);
  
    if (this.UserType === 'vendor') {
      this.router.navigate(['/Issue']);
    } else if (this.UserType === 'customer') {
      this.router.navigate(['/Buy']);
    } else {
      console.warn('Invalid UserType:', this.UserType);
    }
  }
  
}
