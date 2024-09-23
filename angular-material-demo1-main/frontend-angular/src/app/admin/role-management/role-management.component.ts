import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface User {
  name: string;
  photoUrl: string;
  role: string;
  business: string[];
  status: string;
  selected?: boolean;
}

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  users: User[] = [
    { name: 'Ian Chesnut', photoUrl: 'assets/ian.jpg', role: 'Super Admin', business: ['Atos', 'group'], status: 'Active' },
    { name: 'Zeki Mokharzada', photoUrl: 'assets/zeki.jpg', role: 'Admin', business: ['Hp', 'group'], status: 'Inactive' },
    { name: 'Faith Robinson', photoUrl: 'assets/faith.jpg', role: 'Contributor', business: ['Google', 'group'], status: 'Active' },
    // Add more users here...
  ];

  displayedColumns: string[] = ['select', 'name', 'role', 'business', 'status', 'actions'];
  dataSource = new MatTableDataSource(this.users);
  totalUsers = this.users.length;

  ngOnInit() {
    // Initialization code
  }

  resetPassword(user: User) {
    console.log(`Resetting password for ${user.name}`);
    // Implement password reset logic
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u !== user);
    this.dataSource = new MatTableDataSource(this.users);
    this.totalUsers = this.users.length;
  }

  selectAll(event: any) {
    this.users.forEach(user => (user.selected = event.checked));
  }

  addNewUser() {
    console.log('Navigating to Add New User Page');
    // Implement navigation logic
  }

  pageEvent(event: any) {
    // Handle pagination logic
  }
}
