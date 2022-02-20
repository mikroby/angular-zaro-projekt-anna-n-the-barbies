import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/service/customer.service';
import { DateService } from 'src/app/service/date.service';

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

  timeNumber!: number
  timeFormat!: string

  constructor(
    private customerService: CustomerService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.timeNumber = this.dateService.editUpdateTimeNumber('customer')
    this.timeFormat = this.dateService.editUpdateTimeFormat('customer')
    setInterval(() => this.updateTime(), 1000*60)
  }

  updateTime() {
    this.timeNumber = this.dateService.editUpdateTimeNumber('customer')
    this.timeFormat = this.dateService.editUpdateTimeFormat('customer')
  }

}
