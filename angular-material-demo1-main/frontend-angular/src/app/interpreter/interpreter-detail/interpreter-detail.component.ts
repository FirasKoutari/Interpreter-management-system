import { Component, OnInit } from '@angular/core';
import { Interpreter } from '../../Model/Interpreter';
import { ActivatedRoute } from '@angular/router';
import { InterpreterService } from '../../services/interpreter.service';

@Component({
  selector: 'app-interpreter-detail',
  templateUrl: './interpreter-detail.component.html',
  styleUrl: './interpreter-detail.component.css'
})
export class InterpreterDetailComponent implements OnInit {
  interpreterId!: number;
  interpreter!: Interpreter;

  constructor(private route: ActivatedRoute, private service: InterpreterService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.interpreterId = +params['id'];
      this.loadInterpreterDetails();
    });
  }

  loadInterpreterDetails() {
    this.service.GetInterpreterbyid(this.interpreterId).subscribe({
      next: (interpreter) => {
        this.interpreter = interpreter as Interpreter;  // Type assertion
      },
      error: (err) => {
        console.error('Error loading interpreter details:', err);
      }
    });
  }
}
