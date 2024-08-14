import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  reservationsCount = 120; // Example data
  interpretersAvailable = 15; // Example data
  recentActivities = [
    { date: new Date(), description: 'Réservation confirmée pour le client X' },
    { date: new Date(), description: 'Interprète Y ajouté au système' },
    { date: new Date(), description: 'Facture générée pour le client Z' }
  ]; // Example data
  displayedColumns: string[] = ['date', 'description'];

  // Data for charts
  reservationData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Réservations' }
  ];
  reservationLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  interpreterData = [
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Interprètes Disponibles' }
  ];
  interpreterLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  chartOptions = {
    responsive: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
