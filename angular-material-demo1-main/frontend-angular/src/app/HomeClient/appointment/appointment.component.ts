import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterpreterService } from '../../services/interpreter.service';
import { Interpreter } from '../../Model/Interpreter';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  interpreter: Interpreter | undefined;
  appointmentDate: string = '';
  appointmentTime: string = '';
  serviceType: string = '';

  constructor(
    private route: ActivatedRoute,
    private interpreterService: InterpreterService
  ) {}

  ngOnInit(): void {
    const interpreterId = this.route.snapshot.paramMap.get('id');
    if (interpreterId) {
      this.interpreterService.GetInterpreterbyid(Number(interpreterId)).subscribe(interpreter => {
        this.interpreter = interpreter as Interpreter;  // Casting to Interpreter
      });
    }
  }
  

  submitAppointment(): void {
    if (this.interpreter && this.appointmentDate && this.appointmentTime && this.serviceType) {
      const appointmentRequest = {
        name: this.interpreter.name,
        langue: this.interpreter.langue,
        date: this.appointmentDate,
        heure: this.appointmentTime,
        status: 'pending' // Setting status to pending
      };
  
      console.log('Appointment request:', appointmentRequest);
      // You can send this appointmentRequest object to your server here
      alert('Appointment successfully requested!');
    } else {
      alert('Please fill in all fields before submitting.');
    }
  }
  
}
