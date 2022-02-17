import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { hunActiveKeys } from 'src/app/model/customer';
import { hunFeaturedKeys } from 'src/app/model/product';
import { CustomerService } from 'src/app/service/customer.service';

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

  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.options = {
      legend: {
        display: true
    },
      responsive: true,
      maintainAspectRatio: false,

    }
  }

}
