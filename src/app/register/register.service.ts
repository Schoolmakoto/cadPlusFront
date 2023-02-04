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
  let formObj = checkoutForm.getRawValue();
  let serializedForm = JSON.stringify(formObj);

  return this.apiService.registerUser(serializedForm).pipe(
    tap((response:any) => {
      console.log('resposta',response);
    })
  )
}
}
