import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerModel } from './models/CustomerModel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${environment.API_PATH}/login`, { username, password });
  }

  getUsers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(`${environment.API_PATH}/getallusers`, {
      headers: {},
    });
   }

   getUser(id:number): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(`${environment.API_PATH}/getUser/{id}`, {
      headers: {},
    });
   }

}
