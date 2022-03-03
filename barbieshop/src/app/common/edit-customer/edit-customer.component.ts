import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DateService } from 'src/app/service/date.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'

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
    private dateService: DateService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
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
          this.dateService.setToLocalStorage('customer')
        },
        err => console.error(err)
        )
      }
      else {
        this.customerService.update(customer).subscribe(
          customer => {
            this.router.navigate(['/', 'customer']);
            this.toastr.info('A módosítás megtörtént!', 'Módosítás');
            this.dateService.setToLocalStorage('customer')
    },
      err => console.error(err)
    )
    }
  }


  onRemoveCustomer(customer: Customer): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Megerősítés',
        message: 'Biztos vagy benne, hogy törölni szeretnéd?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.customerService.delete(customer.id).subscribe(
          customer => {
            this.router.navigate(['/', 'customer']);
            this.toastr.error('A törlés megtörtént!', 'Törlés');
            this.dateService.setToLocalStorage('customer')
          },
          err => console.error(err)
        )
      }
    });
}

}
