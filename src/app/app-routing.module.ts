import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { RegisterComponent } from './register/register.component';
import { CustomerAddAddressComponent } from './customer-add-address/customer-add-address.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'addaddress',
    component: CustomerAddAddressComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
