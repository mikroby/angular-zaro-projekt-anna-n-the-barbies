import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { hunBillStatusKeys } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  title: string = 'Számlák';
  row: number = 2;
  colorClass: string = 'card-header-rose';
  cardTitle1: string = 'Összes számla';
  cardTitleValue1$: Observable<Number> = this.billService.getNumberOf();
  cardTitle2: string = 'Nem fizetett számlák'
  cardTitleValue2$: Observable<Number> = this.billService.getSumValue('status', 'new', 'amount');
  theadTitle: string[] = hunBillStatusKeys;
  cardTableValue1$: Observable<Number> = this.billService.getNumberOfValue('status', 'new');
  cardTableValue2$: Observable<Number> = this.billService.getNumberOfValue('status', 'paid');
  cardTableValue3$: Observable<Number> = this.billService.getSumValue('status', 'new', 'amount');
  cardTableValue4$: Observable<Number> = this.billService.getSumValue('status', 'paid', 'amount');
  valueType: string = 'db';

  diagrammTitle: string = 'Számlák összegének eloszlása';
  number: number = 1;
  type: string = 'pie';
  chartValue1$: Observable<Number> = this.billService.getSumValue('status', 'new', 'amount');
  chartValue2$: Observable<Number> = this.billService.getSumValue('status', 'paid', 'amount');
  colors: string[] = ['#ff0266', '#81c784'];
  options!: Object;
  values: string[] = hunBillStatusKeys

  timeNumber!: number
  timeFormat!: string

  constructor(
    private billService: BillService,
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
  this.timeNumber = this.dateService.editUpdateTimeNumber('bill')
  this.timeFormat = this.dateService.editUpdateTimeFormat('bill')
    setInterval(() => this.updateTime(), 1000*60)
  }

  updateTime() {
    this.timeNumber = this.dateService.editUpdateTimeNumber('bill')
    this.timeFormat = this.dateService.editUpdateTimeFormat('bill')
  }


}
