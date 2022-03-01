import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillService } from 'src/app/service/bill.service';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-bill-little-card',
  templateUrl: './bill-little-card.component.html',
  styleUrls: ['./bill-little-card.component.scss']
})
export class BillLittleCardComponent implements OnInit {

  colorClass: string =  "card-header-rose";
  materialIcon: string = "storage";
  newBillAmountSum$:  Observable<Number> = this.billService.getSumValue('status', 'new', 'amount')
  cardBodyTitle: string = "Még nem fizetett számlák összege"

  timeNumber!: number
  timeFormat!: string

  constructor(
    private billService: BillService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.timeNumber = this.dateService.editUpdateTimeNumber('bill')
    this.timeFormat = this.dateService.editUpdateTimeFormat('bill')
      setInterval(() => this.updateTime(), 1000*60)
    }

    updateTime() {
      this.timeNumber = this.dateService.editUpdateTimeNumber('bill')
      this.timeFormat = this.dateService.editUpdateTimeFormat('bill')
    }

}
