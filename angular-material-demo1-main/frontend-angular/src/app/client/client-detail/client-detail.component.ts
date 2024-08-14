import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Client } from '../../Model/Client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  clientId!: number;
  client!: Client;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      this.loadClientDetails();
    });
  }

  loadClientDetails() {
    this.service.GetClientbyid(this.clientId).subscribe({
      next: (client) => {
        this.client = client as Client;  // Type assertion
      },
      error: (err) => {
        console.error('Error loading client details:', err);
      }
    });
  }
}
