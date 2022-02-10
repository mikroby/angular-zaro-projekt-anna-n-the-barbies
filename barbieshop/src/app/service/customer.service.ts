import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../model/address';
import { Customer } from '../model/customer';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService<Customer>
{

  constructor(
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

  /*createAddressObcejt(customer: Customer): Customer {
    customer.address = new Address()
    console.log(customer['zip'])
    customer.address.zip= customer['zip'],
    customer.address.country = customer['country'],
    customer.address.city = customer['city'],
    customer.address.street = customer['street'],
    customer.address.notes =  customer['notes']
    console.log(customer.address)
    return customer;
  }*/

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

  /*override create(customer: Customer): Observable<Customer> {
    return super.create(customer).pipe(
      map(customer => this.createAddressObcejt(customer) )
    );
  }*/
}
