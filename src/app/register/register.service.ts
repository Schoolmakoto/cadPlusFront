import { Injectable } from '@angular/core';
import {CustomerAddressViewModel} from '../models/CustomerAddressViewModel'
import { ApiService } from '../api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
items! : CustomerAddressViewModel;

constructor(private apiService: ApiService) {}

registerUser(checkoutForm:any){
  return this.apiService.registerUser(checkoutForm).pipe(
    tap((response:any) => {
      console.log('Your order has been submitted', this.registerUser);
    })
  )
}
}
