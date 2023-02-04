import { TestBed } from '@angular/core/testing';

import { CustomerAddAddressService } from './customer-add-address.service';

describe('CustomerAddAddressService', () => {
  let service: CustomerAddAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerAddAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
