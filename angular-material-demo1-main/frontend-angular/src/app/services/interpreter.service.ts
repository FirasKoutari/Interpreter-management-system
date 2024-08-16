import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interpreter } from '../Model/Interpreter';

@Injectable({
  providedIn: 'root'
})
export class InterpreterService {

  private apiUrl = 'http://localhost:3000/interpreter';

  constructor(private http:HttpClient) { }


//Interpreters


  GetInterpreter():Observable<Interpreter[]> {
    return this.http.get<Interpreter[]>(this.apiUrl);
  }
  SaveInterpreter(data:any) {
    console.log(data);
    return this.http.post(this.apiUrl,data);
  }
  GetInterpreterbyid(id:any) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  UpdateInterpreter(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  DeleteInterpreter(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
