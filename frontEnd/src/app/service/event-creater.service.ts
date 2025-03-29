import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventClass } from '../Class/EventClass';

@Injectable({
  providedIn: 'root'
})
export class EventCreaterService {

  private apiUrl  = 'http://localhost:8080/event/create';
  ;

  constructor(private http: HttpClient) {}

  
  createEvent(event: EventClass): Observable<any> {
    console.log(event.eventName)
    return this.http.post(this.apiUrl, event);
  }
}
