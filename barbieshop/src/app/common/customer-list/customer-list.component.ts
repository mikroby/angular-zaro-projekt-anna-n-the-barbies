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

  phrase: string = '';

  filterKey: string = '';

  sorterKey: string = '';

  direction: number = -1;

  directionId: number = 1;
  directionFirstName: number = 1;
  directionLastName: number = 1;
  directionEmail: number = 1;
  directionAddress: number = 1;
  directionActive: number = -1;

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

  onColumnSelect(key: string): void {
    this.sorterKey = key;
   if (this.sorterKey === 'id') {
      if (this.directionId === 1) {
        this.direction = this.directionId
        this.directionId = this.directionId*-1;
      }
      else if (this.directionId === -1) {
        this.direction = this.directionId
        this.directionId = this.directionId*-1;
      }
    }
    if (this.sorterKey === 'firstName') {
      if (this.directionFirstName === 1) {
        this.direction = this.directionFirstName
        this.directionFirstName = this.directionFirstName*-1;
      }
      else if (this.directionFirstName === -1) {
        this.direction = this.directionFirstName
        this.directionFirstName = this.directionFirstName*-1;
      }
    }
    if (this.sorterKey === 'lastName') {
      if (this.directionLastName === 1) {
        this.direction = this.directionLastName
        this.directionLastName = this.directionLastName*-1;
      }
      else if (this.directionLastName === -1) {
        this.direction = this.directionLastName
        this.directionLastName = this.directionLastName*-1;
      }
    }
    if (this.sorterKey === 'email') {
      if (this.directionEmail === 1) {
        this.direction = this.directionEmail
        this.directionEmail = this.directionEmail*-1;
      }
      else if (this.directionEmail === -1) {
        this.direction = this.directionEmail
        this.directionEmail = this.directionEmail*-1;
      }
    }
    if (this.sorterKey === 'address') {
      if (this.directionAddress === 1) {
        this.direction = this.directionAddress
        this.directionAddress = this.directionAddress*-1;
      }
      else if (this.directionAddress === -1) {
        this.direction = this.directionAddress
        this.directionAddress = this.directionAddress*-1;
      }
    }
    if (this.sorterKey === 'active') {
      if (this.directionActive === 1) {
        this.direction = this.directionActive
        this.directionActive = this.directionActive*-1;
      }
      else if (this.directionActive === -1) {
        this.direction = this.directionActive
        this.directionActive = this.directionActive*-1;
      }
    }
  }

}
