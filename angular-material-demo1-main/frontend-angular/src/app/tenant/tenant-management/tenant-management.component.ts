import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tenant-management',
  templateUrl: './tenant-management.component.html',
  styleUrls: ['./tenant-management.component.css']
})
export class TenantManagementComponent {

  tenants = [
    { id: 1, name: 'Company A', interpreters: 10, status: 'Active' },
    { id: 2, name: 'Company B', interpreters: 5, status: 'Inactive' },
    { id: 3, name: 'Company C', interpreters: 20, status: 'Active' },
    { id: 4, name: 'Company D', interpreters: 20, status: 'Active' },
    { id: 5, name: 'Company E', interpreters: 20, status: 'Inactive' },
    { id: 6, name: 'Company F', interpreters: 20, status: 'Active' },
  ];

  dataSource = new MatTableDataSource(this.tenants);

  toggleStatus(tenant: any) {
    tenant.status = tenant.status === 'Active' ? 'Inactive' : 'Active';
  }

  deleteTenant(id: number) {
    this.tenants = this.tenants.filter(tenant => tenant.id !== id);
    this.dataSource.data = this.tenants;  // Update the data source after deletion
  }

  addTenant() {
    // Logic to add a new tenant
  }

  filterTenants(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();  // Filter the data source
  }
}
