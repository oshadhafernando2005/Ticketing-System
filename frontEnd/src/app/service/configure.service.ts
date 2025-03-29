import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventCreaterService {
  private apiUrl = 'http://localhost:8080/event/getMaxTicket'; // Correct endpoint

  constructor(private http: HttpClient) {}

  // Fetch the updated maxTicket value from the backend
  getMaxTicket(): Observable<number> {
    return this.http.get<number>(this.apiUrl);
  }
}
