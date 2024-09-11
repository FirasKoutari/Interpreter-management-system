import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public username!: string | undefined;
  public roles!: string[];

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    this.username = this.authService.username;
    this.roles = this.authService.roles;
  }
}
