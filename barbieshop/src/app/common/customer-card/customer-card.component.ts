import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { hunActiveKeys } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {

  title: string = 'Vásárlók';
  row: number = 1;
  colorClass: string = 'card-header-success';
  cardTitle1: string = 'Összes vásárló';
  cardTitleValue1$: Observable<Number> = this.customerService.getNumberOf();
  theadTitle: string[] = hunActiveKeys;
  cardTableValue1$: Observable<Number> = this.customerService.getNumberOfValue('active', true);
  cardTableValue2$: Observable<Number> = this.customerService.getNumberOfValue('active', false);
  valueType: string = 'db';

  diagrammTitle: string = 'Vásárlók számának eloszlása';
  number: number = 1;
  type: string = 'pie';
  chartValue1$: Observable<Number> = this.customerService.getNumberOfValue('active', true)
  chartValue2$: Observable<Number> = this.customerService.getNumberOfValue('active', false)
  colors: string[] = ['#ff0266', '#81c784'];
  options!: Object;
  values: string[] = hunActiveKeys

  timeNumber!: number
  timeFormat!: string

  constructor(
    private customerService: CustomerService,
    private dateService: DateService

  ) { }

  ngOnInit(): void {
    this.options = {
      legend: {
        display: true
    },
      responsive: true,
      maintainAspectRatio: false,

  }
  this.timeNumber = this.dateService.editUpdateTimeNumber('customer')
  this.timeFormat = this.dateService.editUpdateTimeFormat('customer')
  setInterval(() => this.updateTime(), 1000*60)
}

updateTime() {
  this.timeNumber = this.dateService.editUpdateTimeNumber('customer')
  this.timeFormat = this.dateService.editUpdateTimeFormat('customer')
}

}
