import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customers$: Observable<Customer> = this.activatedRoute.params.pipe(
    switchMap( params => this.customerService.getOne(params['id']))
    )

  customer: Customer = new Customer()

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    ) { }

    ngOnInit(): void {
    }

    onCreate(customer: Customer) :void {
    this.customerService.create(customer).subscribe(
      customer => {
        this.router.navigate(['/', 'customer'])},
      err => console.error(err)
    )
  }

  onUpdateCustomer(customer: Customer): void {
    this.customerService.update(customer).subscribe(
      product => this.router.navigate(['/', 'customer']),
      err => console.error(err)
    )
  }


  onRemoveCustomer(customer: Customer): void {
    this.customerService.delete(customer.id).subscribe(
      product => this.router.navigate(['/', 'customer']),
      err => console.error(err)
    )
}

}
