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
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    return formGroup.get('password')?.value === formGroup.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  register() {
    if (this.registerFormGroup.valid) {
      console.log('Registration successful');
      this.router.navigateByUrl('/login');
    } else {
      console.error('Form invalid');
    }
  }
}
