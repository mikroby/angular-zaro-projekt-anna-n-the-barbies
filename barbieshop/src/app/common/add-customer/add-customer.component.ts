import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer()
  temp: Address = new Address()


  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    ) { }

    ngOnInit(): void {
    }

    onCreate(customer: Customer, temp:Address) :void {
    customer.address = this.temp;
    this.customerService.create(customer).subscribe(
      customer => {
        this.router.navigate(['/', 'customer'])},
      err => console.error(err)
    )
  }

}
