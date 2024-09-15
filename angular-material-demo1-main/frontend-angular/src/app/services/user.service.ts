import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Model/Client';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/client';

  constructor(private http:HttpClient) { }

  //Clients
  GetClient():Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
  SaveClient(data:any) {
    console.log(data);
    return this.http.post(this.apiUrl,data);
  }
  GetClientbyid(id:any) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  UpdateClient(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  DeleteClient(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
