import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import { MatDialog } from '@angular/material/dialog';

import { Appointment } from '../../Model/Appointment';
import { BookingRequestService } from '../../services/booking-request.service';

@Component({
  selector: 'app-booking-request',
  templateUrl: './booking-request.component.html',
  styleUrl: './booking-request.component.css'
})
export class BookingRequestComponent implements OnInit, AfterViewInit {
  public bookingList!: Appointment[];
  public dataSource: any;
  public displayedColumns: string[] = ["clientName", "interpreterName", "date", "time", "serviceType", "actions"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: BookingRequestService, private dialog: MatDialog, private router: Router) {
    this.loadBookingRequests();
  }

  loadBookingRequests() {
    this.service.GetBookingRequests().subscribe(res => {
      this.bookingList = res;
      this.dataSource = new MatTableDataSource<Appointment>(this.bookingList);
      // Initialize paginator and sort
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterBookings(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  acceptBooking(booking: Appointment) {
    this.service.AcceptBooking(booking.id).subscribe(() => {
      this.loadBookingRequests();
    });
  }

  rejectBooking(booking: Appointment) {
    this.service.RejectBooking(booking.id).subscribe(() => {
      this.loadBookingRequests();
    });
  }


}
