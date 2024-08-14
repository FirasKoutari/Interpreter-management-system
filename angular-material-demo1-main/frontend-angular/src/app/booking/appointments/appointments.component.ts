import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      interpreterName: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      time: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      console.log('Appointment Scheduled:', this.appointmentForm.value);
      // Add logic to handle form submission, e.g., send data to server
    }
  }
}