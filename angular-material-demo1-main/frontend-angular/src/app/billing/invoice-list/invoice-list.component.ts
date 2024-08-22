import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../../Dialog/confirm-dialog/confirm-dialog.component';
import { PopupInvoiceComponent } from '../../Dialog/popup-invoice/popup-invoice.component';
import { Invoice } from '../../Model/Invoice';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit, AfterViewInit {
  public invoiceList!: Invoice[];
  public dataSource: MatTableDataSource<Invoice> = new MatTableDataSource<Invoice>();
  public displayedColumns: string[] = ['id', 'client', 'amount', 'date', 'status', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: InvoiceService, private dialog: MatDialog, private router: Router) {
    this.loadInvoices();
  }

  loadInvoices() {
    this.service.GetInvoices().subscribe(res => {
      this.invoiceList = res;
      this.dataSource.data = this.invoiceList;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterInvoices(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  addInvoice() {
    this.openPopup(0, 'Add Invoice');
  }

  updateInvoice(id: number) {
    this.openPopup(id, 'Edit Invoice');
  }

  deleteInvoice(invoice: Invoice) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: `Are you sure you want to delete invoice ${invoice.id}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.service.DeleteInvoice(invoice.id).subscribe({
          next: () => this.loadInvoices(),
          error: err => console.error('Error deleting invoice:', err)
        });
      }
    });
  }

  viewDetails(invoice: Invoice) {
    this.router.navigate(['/admin/invoice', invoice.id]);
  }

  openPopup(id: number, title: string) {
    const popup = this.dialog.open(PopupInvoiceComponent, {
      width: '60%',
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      data: {
        title: title,
        id: id
      }
    });

    popup.afterClosed().subscribe(() => this.loadInvoices());
  }
}
