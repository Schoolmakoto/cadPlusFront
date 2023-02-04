import { Injectable } from '@angular/core';
import {CustomerAddressViewModel} from '../models/CustomerAddressViewModel'
import { ApiService } from '../api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddAddressService {

  constructor(private apiService: ApiService) {
    
   }
  
   addNewAddress(checkoutForm:any){
    let formObj = checkoutForm.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    const token = localStorage.getItem('auth_file'); //logged user_id
    return this.apiService.addNewAddress(token,serializedForm).pipe(
      tap((response:any) => {
        console.log('resposta',response);
      })
    )
  }
}

