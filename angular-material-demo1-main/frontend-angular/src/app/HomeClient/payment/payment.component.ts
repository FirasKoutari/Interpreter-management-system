import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // Payment form model
  cardHolderName: string = '';
  cardNumber: string = '';
  cardExpiryMonth: string = '';
  cardExpiryYear: string = '';
  cardCVV: string = '';
  amount: string = '';
  formSubmitted: boolean = false;

  // Month and Year options for expiry date
  months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years: string[] = Array(10).fill(0).map((_, i) => (new Date().getFullYear() + i).toString());

  constructor() {}

  ngOnInit(): void {}

  onSubmitPayment(): void {
    this.formSubmitted = true;
    if (this.cardHolderName && this.cardNumber && this.cardExpiryMonth && this.cardExpiryYear && this.cardCVV && this.amount) {
      console.log('Payment submitted:', {
        cardHolderName: this.cardHolderName,
        cardNumber: this.cardNumber,
        cardExpiryMonth: this.cardExpiryMonth,
        cardExpiryYear: this.cardExpiryYear,
        cardCVV: this.cardCVV,
        amount: this.amount
      });
      alert('Payment processed successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  }

  onCancel(): void {
    // Clear form values when "Cancel" is clicked
    this.cardHolderName = '';
    this.cardNumber = '';
    this.cardExpiryMonth = '';
    this.cardExpiryYear = '';
    this.cardCVV = '';
    this.amount = '';
    this.formSubmitted = false;
  }
}
