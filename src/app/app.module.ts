import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomersComponent } from './customers/customers.component';
import { RegisterComponent } from './register/register.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerAddAddressComponent } from './customer-add-address/customer-add-address.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NavigationComponent, CustomersComponent, RegisterComponent, CustomerUpdateComponent, CustomerAddAddressComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
