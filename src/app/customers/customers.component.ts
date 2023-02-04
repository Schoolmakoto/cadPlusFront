import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { AddressModel } from '../models/AddressModel';
import { CustomerModel } from '../models/CustomerModel';
import { Router } from '@angular/router';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customer!: CustomerModel;
  addresses!: AddressModel[];
  displayedColumns: string[] = ['Address', 'AddressN','CEP',"action"];

  constructor(private apiService: ApiService, private router: Router) {}
  NavigateToAddAddress(){
    this.router.navigate(['/addaddress']);
    
  }
  Edit(id:any){
    this.router.navigate(['/login']);
    console.log("id");
  }
  ngOnInit(): void { 
  var token = localStorage.getItem('auth_file');
      this.apiService
      .getAddresses(token) //trocar para variável de ambiente
      .pipe(tap((it) => (this.addresses = it)))
      .subscribe();
  }
}
