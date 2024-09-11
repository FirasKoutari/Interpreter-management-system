import { Component, OnInit } from '@angular/core';
import { BookingRequestService } from '../../services/booking-request.service';
import { Appointment } from '../../Model/Appointment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // Billing form fields
  firstName: string = '';
  lastName: string = '';
  
  // Payment selection
  selectedPaymentMethod: string = 'Direct Bank Transfer';

  // Accepted Appointments
  acceptedAppointments: Appointment[] = [];

  // Calculated fields for totals
  subtotal: number = 0;
  total: number = 0;

  constructor(private bookingRequestService: BookingRequestService) {}

  ngOnInit(): void {
    // Fetch the accepted appointments
    this.loadAcceptedAppointments();
  }

  loadAcceptedAppointments(): void {
    this.bookingRequestService.GetBookingRequests().subscribe((appointments: Appointment[]) => {
      // Filter appointments with accepted status
      this.acceptedAppointments = appointments.filter(app => app.status === 'accepted');
      
      // Calculate subtotal based on appointments
      this.calculateSubtotal();
    });
  }

  calculateSubtotal(): void {
    this.subtotal = this.acceptedAppointments.reduce((acc, appointment) => {
      // Here, let's assume each appointment has a fixed cost, e.g., 1550 for simplicity
      const cost = 1550; // This value can be dynamic based on your data
      return acc + cost;
    }, 0);

    // Assuming a fixed total for now, you can update this with taxes, fees, etc.
    this.total = this.subtotal + 170; // Adding some constant total as an example
  }

  placeOrder(): void {
    // This function will be called when 'Place Order' button is clicked
    if (this.firstName && this.lastName) {
      console.log('Order placed with details:', {
        firstName: this.firstName,
        lastName: this.lastName,
        paymentMethod: this.selectedPaymentMethod,
        appointments: this.acceptedAppointments
      });
      alert('Order successfully placed!');
    } else {
      alert('Please fill out the billing details.');
    }
  }
}
