import { Component, OnInit } from '@angular/core';
import { InterpreterService } from '../services/interpreter.service';
import { Interpreter } from '../Model/Interpreter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  interpreterList: Interpreter[] = [];
  filteredInterpreterList: Interpreter[] = [];

  constructor(private interpreterService: InterpreterService) {}

  ngOnInit(): void {
    this.interpreterService.GetInterpreter().subscribe((interpreters) => {
      this.interpreterList = interpreters;
      this.filteredInterpreterList = interpreters;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredInterpreterList = this.interpreterList;
      return;
    }

    this.filteredInterpreterList = this.interpreterList.filter(
      interpreter => interpreter?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  makeAppointment(interpreter: Interpreter) {
    console.log(`Making an appointment with interpreter: ${interpreter.name}`);
  }
}
