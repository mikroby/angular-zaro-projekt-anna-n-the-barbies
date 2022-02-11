import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer = new Customer()
  newcustomer: Customer = new Customer()

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === 0) {
      this.customer = this.newcustomer
    }
    if (this.activatedRoute.snapshot.params['id'] > 0) {
      this.activatedRoute.params.pipe(
        switchMap( params => this.customerService.getOne(params['id']))
        ).subscribe(customer => this.customer = customer)
    }
}


  onUpdateCustomer(customer: Customer): void {
    if (customer.id === 0) {
      this.customerService.create(customer).subscribe(
        customer => {
          this.router.navigate(['/', 'customer'])},
        err => console.error(err)
      )
    }
    if (customer.id > 0) {
    this.customerService.update(customer).subscribe(
      product => this.router.navigate(['/', 'customer']),
      err => console.error(err)
    )
    }
  }


  onRemoveCustomer(customer: Customer): void {
    this.customerService.delete(customer.id).subscribe(
      product => this.router.navigate(['/', 'customer']),
      err => console.error(err)
    )
}

}
