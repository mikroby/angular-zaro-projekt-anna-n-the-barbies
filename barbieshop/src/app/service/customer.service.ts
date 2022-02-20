import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Address } from '../model/address';
import { Customer } from '../model/customer';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends SummaryService<Customer>
{

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'customer';
  }

  customerAddress: Address = new Address()

  createAddress(customer: Customer): Customer {
    if (typeof customer.address === 'string') {
      const street = (customer.address as unknown as string);
      customer.address = new Address();
      customer.address.street = street;
    }
    if (typeof customer.address === 'object') {
      this.customerAddress = new Address()
      this.customerAddress.zip = customer.address.zip
      this.customerAddress.country = customer.address.country
      this.customerAddress.city = customer.address.city
      this.customerAddress.street = customer.address.street
      this.customerAddress.notes = customer.address.notes
      customer.address = this.customerAddress
    }
    return customer;
  }

  override getAll(): Observable<Customer[]> {
    return super.getAll().pipe(
      map(list => {
        return list.map(customer => {
          return this.createAddress(customer)});
      }),
    );
  }

  override getOne(id: number): Observable<Customer> {
    return super.getOne(id).pipe(
      map(customer => this.createAddress(customer) )
    );
  }

}
