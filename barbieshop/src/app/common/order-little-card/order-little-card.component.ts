import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DateService } from 'src/app/service/date.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-little-card',
  templateUrl: './order-little-card.component.html',
  styleUrls: ['./order-little-card.component.scss']
})
export class OrderLittleCardComponent implements OnInit {

  colorClass: string =  "card-header-info";
  materialIcon: string = "shopping_cart";
  dontPaidOrderNumber$:  Observable<Number> = this.orderService.getNumberOfValueReserve('status', 'paid')
  cardBodyTitle: string = "Még nem fizetett rendelések száma"
  valueType: string = "db"

  timeNumber!: number
  timeFormat!: string

  constructor(
    private orderService: OrderService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.timeNumber = this.dateService.editUpdateTimeNumber('order')
    this.timeFormat = this.dateService.editUpdateTimeFormat('order')
      setInterval(() => this.updateTime(), 1000*60)
    }

    updateTime() {
      this.timeNumber = this.dateService.editUpdateTimeNumber('order')
      this.timeFormat = this.dateService.editUpdateTimeFormat('order')
    }

}
