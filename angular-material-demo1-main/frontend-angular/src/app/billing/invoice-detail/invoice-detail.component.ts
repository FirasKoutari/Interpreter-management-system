import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../Model/Invoice';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoiceId!: number;
  invoice!: Invoice;

  constructor(private route: ActivatedRoute, private service: InvoiceService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.invoiceId = +params['id'];
      this.loadInvoiceDetails();
    });
  }

  loadInvoiceDetails() {
    this.service.GetInvoiceById(this.invoiceId).subscribe({
      next: (invoice) => {
        this.invoice = invoice as Invoice;
      },
      error: (err) => {
        console.error('Error loading invoice details:', err);
      }
    });
  }
}
