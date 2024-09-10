import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { SignUpModel } from '../../Model/SignUpModel';
import { LoginModel } from '../../Model/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isSignDivVisiable: boolean = true;

  signUpObj: SignUpModel = new SignUpModel();
  loginObj: LoginModel = new LoginModel();

  constructor(private authService: AuthenticationService, private router: Router) {}

  onRegister() {
    if (this.authService.register(this.signUpObj)) {
      alert('Registration Success');
    } else {
      alert('Registration failed. User may already exist.');
    }
  }

  onLogin() {
    if (this.authService.login(this.loginObj)) {
      alert('User Found...');
      this.router.navigateByUrl('/admin/dashboard');
    } else {
      alert('No User Found');
    }
  }
}