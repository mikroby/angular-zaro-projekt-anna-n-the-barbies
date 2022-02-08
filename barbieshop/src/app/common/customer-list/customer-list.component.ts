import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList$: Observable<Customer[]> = this.customerService.getAllCustomer()

  keys: string[] = Object.keys(new Customer());

  //customerAddress: string = new Address().getFullAddress()


  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customerService.getOneCustomer(2).subscribe(
        customer => Object.values(customer.address[0]).join(" "))
  }



  onDeleteCustomer(customer: Customer): void {
    this.customerService.deleteCustomer(customer.id).subscribe(
      customer => this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'customer'])}
      )
    )
  }

}
