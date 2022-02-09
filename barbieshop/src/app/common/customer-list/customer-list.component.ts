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

  customerList$: Observable<Customer[]> = this.customerService.getAll()

  keys: string[] = Object.keys(new Customer());

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onRemoveCustomer(customer: Customer): void {
    this.customerService.delete(customer.id).subscribe(
      customer => this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'customer'])}
      )
    )
  }

}
