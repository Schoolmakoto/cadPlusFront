import { Component, OnInit } from '@angular/core';
import { CustomerAddAddressService } from './customer-add-address.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add-address',
  templateUrl: './customer-add-address.component.html',
  styleUrls: ['./customer-add-address.component.scss']
})
export class CustomerAddAddressComponent implements OnInit {

  ngOnInit(): void {
  }
  checkoutForm = this.formBuilder.group({
    AddressName: ['',[Validators.required]],
    CEP:['',[Validators.required]]
  }); 
  constructor(
    private CustomerAddAddressService: CustomerAddAddressService,
    private formBuilder: FormBuilder,private router: Router
  ) {
  }
  onSubmit(): void {
    if (this.checkoutForm.invalid) 
    {return;}
    this.CustomerAddAddressService
      .addNewAddress(this.checkoutForm)
        .subscribe((response) => {
          this.router.navigate(['/login']);
        });;
  }
  
}
