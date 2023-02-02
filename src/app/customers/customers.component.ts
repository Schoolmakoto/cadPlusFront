import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { CustomerModel } from '../models/CustomerModel';

@Component({
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers!: CustomerModel[];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .getUsers()
      .pipe(tap((it) => (this.customers = it)))
      .subscribe();
  }
}
