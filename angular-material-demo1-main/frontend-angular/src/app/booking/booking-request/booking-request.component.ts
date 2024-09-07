import { Component, OnInit } from '@angular/core';
import { BookingRequestService } from '../../services/booking-request.service';
import { Client } from '../../Model/Client';

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrls: ['./booking-request.component.css']
})
export class BookingRequestComponent implements OnInit {
  bookingRequests: Client[] = [];

  constructor(private bookingRequestService: BookingRequestService) {}

  ngOnInit(): void {
    this.bookingRequestService.getBookingRequests().subscribe(requests => {
      this.bookingRequests = requests;
    });
  }

  acceptRequest(client: Client): void {
    client.status = 'accepted';
    this.bookingRequestService.updateBookingStatus(client.id, 'accepted').subscribe(() => {
      alert(`Accepted appointment for ${client.name}`);
    });
  }

  rejectRequest(client: Client): void {
    client.status = 'rejected';
    this.bookingRequestService.updateBookingStatus(client.id, 'rejected').subscribe(() => {
      alert(`Rejected appointment for ${client.name}`);
    });
  }
}
