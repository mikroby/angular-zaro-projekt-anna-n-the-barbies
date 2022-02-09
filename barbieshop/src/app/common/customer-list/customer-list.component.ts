import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  //customerList$: Observable<Customer[]> = this.customerService.getAll()

  keys: string[] = Object.keys(new Customer());

  //<tr *ngFor="let customer of customerList$ | async">
  //<td *ngFor="let key of keys">{{ customer[key] }}</td>

  /*      <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.address.full }}</td>
          <td>{{ customer.active }}</td>
          */

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void { }



  /*onDeleteCustomer(customer: Customer): void {
    this.customerService.delete(customer.id).subscribe(
      customer => this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'customer'])}
      )
    )
  }*/

}
