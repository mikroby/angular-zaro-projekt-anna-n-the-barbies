import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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

  countries = ["Brazil", "Russia", "China", "Indonesia", "Peru", "Russia", "Chile", "Japan", "China", "Brazil",
"Belarus", "China", "Croatia", "Greece", "Bangladesh", "Kazakhstan", "Indonesia", "Colombia", "Germany", "Russia", "Indonesia",
"China", "Peru", "Philippines", "Poland", "Indonesia", "Sweden", "Greece", "Ukraine", "Vietnam", "Portugal", "Russia", "Nigeria",
"China", "Portugal", "Russia", "China", "Philippines", "Russia", "Poland", "Japan", "Serbia", "Poland", "Indonesia", "Thailand", "Poland",
"Indonesia", "Portugal", "Ukraine", "Dominican Republic", "Netherlands", "China", "Niger", "Bulgaria", "China", "South Africa", "Indonesia",
"Ecuador", "Indonesia", "Cameroon", "Indonesia", "Germany", "Yemen", "China", "Sweden", "Russia", "France", "Cuba", "Poland", "Portugal", "Poland",
"Portugal", "United States", "Afghanistan", "Indonesia", "Philippines", "Japan", "Indonesia", "Jordan", "United States", "China", "Russia",
"Poland", "United States", "Egypt", "France", "Hungary", "France", "United States", "Indonesia", "Malaysia", "Thailand", "France", "China","Colombia",
"Czech Republic", "China", "France", "Argentina", "Indonesia", "China", "Ukraine", "Mexico", "Pakistan", "Argentina", "Nigeria", "China"]

  createAddress(customer: Customer): Customer {
    if (typeof customer.address === 'string') {
      const addressParts = (customer.address as unknown as string).split(' ');
      const zip = addressParts.shift();
      const street = addressParts.join(' ');
      customer.address = new Address();
      customer.address.zip = zip as unknown as string;
      customer.address.street = street;
      //customer.address.country = String(this.countries.sort((a, b) => 0.5 - Math.random()).shift())
      //super.create(customer)
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
