import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from '../Model/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private apiUrl = 'http://localhost:3000/invoices';

  constructor(private http:HttpClient) { }

  // Invoices
 GetInvoices(): Observable<Invoice[]> {
  return this.http.get<Invoice[]>(this.apiUrl);
}

SaveInvoice(data: any) {
  return this.http.post(this.apiUrl, data);
}

GetInvoiceById(id: any) {
  return this.http.get(`${this.apiUrl}/${id}`);
}

UpdateInvoice(id: any, data: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, data);
}

DeleteInvoice(id: any): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}
}
