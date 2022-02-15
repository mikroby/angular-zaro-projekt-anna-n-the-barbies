import { Router } from '@angular/router';
import { OrderService } from './../../service/order.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  List$: Observable<Order[]> = this.orderService.getAll()
  keys: string[] = Object.keys(new Order());
  componentName = 'order';
  buttonHiddenOpts = { edit: false, delete: false };

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRemove(id: number): void {
    this.orderService.delete(id).subscribe(
      order => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName])
      }
      )
    )
  }

}
