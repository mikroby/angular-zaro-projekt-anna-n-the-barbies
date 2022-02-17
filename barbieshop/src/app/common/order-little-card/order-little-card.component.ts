import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
  }

}
