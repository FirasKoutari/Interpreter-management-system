import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Model/Client';

@Injectable({
  providedIn: 'root'
})
export class BookingRequestService {
  private apiUrl = 'http://localhost:3000'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  getBookingRequests(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/booking-requests`);
  }

  updateBookingStatus(clientId: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/booking-requests/${clientId}`, { status });
  }
}
