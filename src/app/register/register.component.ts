import { Component} from '@angular/core';
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
    Mail:['',[Validators.required]],
    Password:['',[Validators.required]],
    Name: ['',[Validators.required]],
    CPF:['',[Validators.required]],
    Phone:['',[Validators.required]],
    AddressName: ['',[Validators.required]],
    CEP:['',[Validators.required]]
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