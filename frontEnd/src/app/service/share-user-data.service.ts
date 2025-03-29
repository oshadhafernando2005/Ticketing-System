import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private userDataSource = new BehaviorSubject<any>({
    Username: '',
    UserId: '',
    UserType: '',
  });

  userData$ = this.userDataSource.asObservable();

  setUserData(data: { Username: string; UserId: string; UserType: string }) {
    this.userDataSource.next(data);
  }
}
