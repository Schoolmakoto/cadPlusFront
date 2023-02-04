import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddressModel } from './models/AddressModel';
import { CustomerModel } from './models/CustomerModel';
import { CustomerAddressViewModel } from './models/CustomerAddressViewModel';
import {catchError} from 'rxjs/operators'; 
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Object> {
    return this.http.post(`${environment.API_PATH}/login`, { username, password });
  }

  registerUser(post:any): Observable<CustomerAddressViewModel> {
    console.log(post);
    return this.http.post<CustomerAddressViewModel>(`${environment.API_PATH}/registerUser`,post, {
      headers: {'Content-Type': 'application/json'},
    })
    .pipe(catchError((err) => {
      console.error(err.error);
      throw err;
    }))}

  getUsers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(`${environment.API_PATH}/getallusers`, {
      headers: {},
    });
   }

   getAddresses(userID:any): Observable<AddressModel[]> {
    return this.http.get<AddressModel[]>(`${environment.API_PATH}/getAddressesByUser/${userID}`, {
      headers: {},
    });
   }
   getUser(id:number): Observable<CustomerModel> {
    return this.http.get<CustomerModel>(`${environment.API_PATH}/getUser/{id}`, {
      headers: {},
    });
   }

   addNewAddress(userId:any,post:any): Observable<CustomerAddressViewModel> {
    console.log(post);
    return this.http.post<CustomerAddressViewModel>(`${environment.API_PATH}/user/${userId}/addAddress/`,post, {
      headers: {'Content-Type': 'application/json'},
    })
    .pipe(catchError((err) => {
      console.error(err.error);
      throw err;
    }))}

   updateAddress(userId:any,addressId:any,post:any): Observable<CustomerAddressViewModel> {
    console.log(post);
    return this.http.put<CustomerAddressViewModel>(`${environment.API_PATH}/updateUser/user/${userId}/address/${addressId}`,post, {
      headers: {'Content-Type': 'application/json'},
    })
    .pipe(catchError((err) => {
      console.error(err.error);
      throw err;
    }))}

}
