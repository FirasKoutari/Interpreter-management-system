import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public registerFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerFormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    if (this.registerFormGroup.valid) {
      // Handle registration logic here
      console.log('Registration successful');
      this.router.navigateByUrl('/login');
    }
  }
}
