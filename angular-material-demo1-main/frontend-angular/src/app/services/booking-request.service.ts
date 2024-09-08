import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Model/Client';
import { Appointment } from '../Model/Appointment';

@Injectable({
  providedIn: 'root'
})
export class BookingRequestService {
  private apiUrl = 'http://localhost:3000/appointment'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  GetBookingRequests(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}`);
  }

  AcceptBooking(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/accept/${id}`, {});
  }

  RejectBooking(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/reject/${id}`, {});
  }
}
