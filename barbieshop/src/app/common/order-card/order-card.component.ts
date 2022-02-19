import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { hunStatusKeys, paidStatusKeys } from 'src/app/model/order';
import { DateService } from 'src/app/service/date.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss']
})
export class OrderCardComponent implements OnInit {

  title: string = 'Rendelések';
  row: number = 2;
  colorClass: string = 'card-header-info';
  cardTitle1: string = 'Összes rendelés';
  cardTitleValue1$: Observable<Number> = this.orderService.getNumberOf();
  cardTitle2: string = 'Nem fizetett rendelések'
  cardTitleValue2$: Observable<Number> = this.orderService.getNumberOfValueReserve('status', 'paid');
  theadTitle: string[] = hunStatusKeys;
  cardTableValue1$: Observable<Number> = this.orderService.getNumberOfValue('status', 'new');
  cardTableValue2$: Observable<Number> = this.orderService.getNumberOfValue('status', 'shipped');
  cardTableValue3$: Observable<Number> = this.orderService.getNumberOfValue('status', 'paid');
  valueType: string = 'db';

  diagrammTitle: string = 'Rendelések eloszlása';
  number: number = 3;
  type: string = 'bar';
  chartValue1$: Observable<Number> = this.orderService.getNumberOfValue('status', 'new')
  chartValue2$: Observable<Number> = this.orderService.getNumberOfValue('status', 'shipped');
  chartValue3$: Observable<Number> = this.orderService.getNumberOfValue('status', 'paid');
  colors: string[] = ['#ff0266', '#81c784', '#29b6f6'];
  options!: Object;
  keys: string[] = hunStatusKeys;
  values: string[] = paidStatusKeys

  timeNumber!: number
  timeFormat!: string

  constructor(
    private orderService: OrderService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.options = {
      legend: {
        display: true
    },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{ display: true,
                  stacked: true,
                    gridLines: {
                        display:false
                    }
                }],
        yAxes: [{
                    display: true,
                    stacked:true,
                    gridLines: {
                        display:false
                    }
                }]
    }
  }
  this.timeNumber = this.dateService.editUpdateTimeNumber('order')
  this.timeFormat = this.dateService.editUpdateTimeFormat('order')
    setInterval(() => this.updateTime(), 1000*60)
  }

  updateTime() {
    this.timeNumber = this.dateService.editUpdateTimeNumber('order')
    this.timeFormat = this.dateService.editUpdateTimeFormat('order')
  }
}
