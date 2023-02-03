import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddressModel } from './models/AddressModel';
import { CustomerModel } from './models/CustomerModel';
import { CustomerAddressViewModel } from './models/CustomerAddressViewModel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Object> {
    return this.http.post(`${environment.API_PATH}/login`, { username, password });
  }


  registerUser(post:any): Observable<CustomerAddressViewModel> {
    return this.http.post<CustomerAddressViewModel>(`${environment.API_PATH}/registerUser`, {
      headers: {},
    });
   }

  getUsers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(`${environment.API_PATH}/getallusers`, {
      headers: {},
    });
   }

   getAddresses(userID:number): Observable<AddressModel[]> {
    return this.http.get<AddressModel[]>(`${environment.API_PATH}/getAddressesByUser/${userID}`, {
      headers: {},
    });
   }
   getUser(id:number): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(`${environment.API_PATH}/getUser/{id}`, {
      headers: {},
    });
   }

}
