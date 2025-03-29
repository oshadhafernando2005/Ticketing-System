import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Class/user';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private apiUrl = 'http://localhost:8080/vendor/save'; 

  constructor(private http : HttpClient) { }

  saveVendor(vendor: User): Observable<any> {
    console.log(vendor)
    return this.http.post(this.apiUrl, vendor);
  }

}


