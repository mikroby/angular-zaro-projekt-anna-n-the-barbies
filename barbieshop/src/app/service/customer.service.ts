import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../model/address';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = "http://localhost:3000/"
  //apiUrl: string = environment.apiUrl
  entityName: string = 'customer'

  /*constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'customer';
  }

  customerAddress: Address = new Address()

  createAddress(customer: Customer): Customer {
    if (typeof customer.address === 'string') {
      const addressParts = (customer.address as unknown as string).split(' ');
      const zip = addressParts.shift();
      const street = addressParts.join(' ');
      customer.address = new Address();
      customer.address.zip = zip as unknown as string;
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

  override get(id: number): Observable<Customer> {
    return super.get(id).pipe(
      map(customer => this.createAddress(customer) )
    );
  }*/
}
