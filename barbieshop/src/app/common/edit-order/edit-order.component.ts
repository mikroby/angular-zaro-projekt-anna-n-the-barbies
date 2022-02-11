import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order!: Order;

  newOrder: Order = new Order();

  id!: string;


  constructor(
    private orderService: OrderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(params => this.id = params['id'])).subscribe(
        () => {
          if (this.id === '0') {
            this.order = this.newOrder;
          } else {
            this.orderService.getOne(Number(this.id)).subscribe(
              (result) => this.order = result
            )
          }
        }
        ,
      );
  }

  onUpdateorder(order: Order): void {

  }

  onRemoveorder(order: Order): void {

  }
}
