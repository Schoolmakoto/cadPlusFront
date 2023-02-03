import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { AddressModel } from '../models/AddressModel';
import { CustomerModel } from '../models/CustomerModel';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customer!: CustomerModel;
  addresses!: AddressModel[];
  displayedColumns: string[] = ['Address', 'AddressN','CEP',];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void { 
      this.apiService
      .getAddresses(1) //trocar para variável de ambiente
      .pipe(tap((it) => (this.addresses = it)))
      .subscribe();
  }
}
