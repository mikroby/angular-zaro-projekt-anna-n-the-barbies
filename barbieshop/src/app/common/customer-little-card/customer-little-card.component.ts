import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-little-card',
  templateUrl: './customer-little-card.component.html',
  styleUrls: ['./customer-little-card.component.scss']
})
export class CustomerLittleCardComponent implements OnInit {

  colorClass: string =  "card-header-success";
  materialIcon: string = "group";
  activeCustomerNumber$:  Observable<Number> = this.customerService.getNumberOfValue('active', true);
  cardBodyTitle: string = "Aktív vásárlók száma"
  valueType: string = "db"

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
  }

}
