import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-popup-invoice',
  templateUrl: './popup-invoice.component.html',
  styleUrl: './popup-invoice.component.css'
})
export class PopupInvoiceComponent {
  inputdata: any;
  myform = this.buildr.group({
    client: this.buildr.control(''),
    amount: this.buildr.control(''),
    date: this.buildr.control(''),
    status: this.buildr.control('')
  });
  editdata: any;
  closemessage = 'closed using directive'
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupInvoiceComponent>, private buildr: FormBuilder,private invoiceservice:InvoiceService) {}
  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.id > 0) {
      this.setpopupdatainvoice(this.inputdata.id);
    }
  } 

  setpopupdatainvoice(id: any) {
    this.invoiceservice.GetInvoiceById(id).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({
        client: this.editdata.client,
        amount: this.editdata.amount,
        date: this.editdata.date,
        status: this.editdata.status
      });
    });
  }
  
  closepopup(){
    this.ref.close('Closed using function');
  }
  

  saveInvoice() {
    if (this.inputdata.id > 0) {
      // Update existing invoice
      this.invoiceservice.UpdateInvoice(this.inputdata.id, this.myform.value).subscribe({
        next: () => {
          this.closepopup();
        },
        error: (err) => {
          console.error('Error updating invoice:', err);
        }
      });
    } else {
      // Save new invoice
      this.invoiceservice.SaveInvoice(this.myform.value).subscribe({
        next: () => {
          this.closepopup();
        },
        error: (err) => {
          console.error('Error saving invoice:', err);
        }
      });
    }
  }

}
