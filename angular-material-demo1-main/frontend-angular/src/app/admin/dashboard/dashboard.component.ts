import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  bookingsChart: any;
  interpretersChart: any;
  clientsChart: any;

  constructor() {
    // Enregistrer tous les composants de Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createBookingsChart();
    this.createInterpretersChart();
    this.createClientsChart();
  }

  createBookingsChart() {
    const ctx = document.getElementById('bookingsChart') as HTMLCanvasElement;
    
    this.bookingsChart = new Chart(ctx, {
      type: 'line', // Graphique en ligne pour les réservations
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Réservations',
          data: [120, 150, 180, 220, 260, 300, 350], // Données de réservation d'exemple
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createInterpretersChart() {
    const ctx = document.getElementById('interpretersChart') as HTMLCanvasElement;
    
    this.interpretersChart = new Chart(ctx, {
      type: 'bar', // Graphique à barres pour les interprètes
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Interprètes Disponibles',
          data: [10, 15, 13, 20, 22, 25, 30], // Données d'exemple
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  createClientsChart() {
    const ctx = document.getElementById('clientsChart') as HTMLCanvasElement;
    
    this.clientsChart = new Chart(ctx, {
      type: 'pie', // Graphique circulaire pour les clients
      data: {
        labels: ['Clients Actifs', 'Clients Inactifs', 'Nouveaux Clients'],
        datasets: [{
          label: 'Clients',
          data: [200, 50, 100], // Données d'exemple
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true
      }
    });
  }
}
