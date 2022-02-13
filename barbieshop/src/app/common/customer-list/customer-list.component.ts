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

  dirSymbol: string[] = new Array('');
  SymbolArray: string[] = ['▲', '▼'];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.direction = 1;
    this.dirSymbol[0] = this.SymbolArray[0];
    this.sorterKey = this.keys[0]
    }

  onRemoveCustomer(customer: Customer): void {
    this.customerService.delete(customer.id).subscribe(
      customer => this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(['/', 'customer'])}
      )
    )
  }

  changeSortDirection(key: string, i: number): void {
    if (key === this.sorterKey) {
      this.direction *= -1;
      const dirIndex = this.direction === 1 ? 0 : 1;
      this.dirSymbol[i] = this.SymbolArray[dirIndex];
    } else {
      this.direction = 1;
      this.sorterKey = key;
      this.dirSymbol = new Array('');
      this.dirSymbol[i] = this.SymbolArray[0];
    }
  }


}
