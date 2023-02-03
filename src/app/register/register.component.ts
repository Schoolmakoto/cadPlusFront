import {AutofillMonitor} from '@angular/cdk/text-field';
import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

/** @title Monitoring autofill state with AutofillMonitor */
@Component({
  selector: 'text-autofill',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  checkoutForm = this.formBuilder.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    name: ['',[Validators.required]],
    cpf:['',[Validators.required]],
    phone:['',[Validators.required]],
    address: ['',[Validators.required]],
    cep:['',[Validators.required]]
  }); 
  constructor(
    private RegisterService: RegisterService,
    private formBuilder: FormBuilder,private router: Router
  ) {}
  onSubmit(): void {
    if (this.checkoutForm.invalid) 
    {return;}
    this.RegisterService
      .registerUser(this.checkoutForm)
        .subscribe((response) => {
          this.router.navigate(['/login']);
        });;
  }
}