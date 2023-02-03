import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';

/** @title Monitoring autofill state with AutofillMonitor */
@Component({
  selector: 'text-autofill',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

 // items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    email:'',
    password:'',
    name: '',
    cpf:'',
    phone:'',
    address: '',
    cep:''
  });

  constructor(
    //private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    // Process checkout data here
    //this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}