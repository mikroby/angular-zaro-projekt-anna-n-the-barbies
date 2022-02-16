import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id'] === '0') {
      this.customer = this.newcustomer
    }
    else {
      this.activatedRoute.params.pipe(
        switchMap( params => this.customerService.getOne(params['id']))
        ).subscribe(customer => this.customer = customer)
    }
}


  onUpdateCustomer(customer: Customer): void {
    if (customer.id === 0) {
      this.customerService.create(customer).subscribe(
        customer => {
          this.router.navigate(['/', 'customer']);
          this.toastr.success('A vásárló hozzáadása sikeres volt!', 'Hozzáadás');
        },
        err => console.error(err)
      )
    }
    else {
    this.customerService.update(customer).subscribe(
      customer => {
        this.router.navigate(['/', 'customer']);
      this.toastr.info('A módosítás megtörtént!', 'Módosítás');
    },
      err => console.error(err)
    )
    }
  }


  onRemoveCustomer(customer: Customer): void {
    this.customerService.delete(customer.id).subscribe(
      customer => {
        this.router.navigate(['/', 'customer']);
        this.toastr.error('A törlés megtörtént!', 'Törlés');
      },
      err => console.error(err)
    )
}

}
