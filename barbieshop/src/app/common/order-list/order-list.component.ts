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

  orderList$: Observable<Order[]> = this.orderService.getAll()

  keys: string[] = Object.keys(new Order());

  phrase: string = '';

  filterKey: string = '';

  sorterKey: string = '';

  direction: number = 1;

  dirSymbol: string[] = new Array('');
  SymbolArray: string[] = ['▲', '▼'];


  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRemoveOrder(order: Order): void {
    this.orderService.delete(order.id).subscribe(
      order => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', 'order'])
      }
      )
    )
  }

  changeSortDirection(key: string, i: number): void {
    if (key === this.sorterKey) {
      this.direction *= -1;
      const dirIndex = this.direction === 1 ? 0 : 1;
      this.dirSymbol[i] = this.SymbolArray[dirIndex];
    } else {
      this.direction = 1;
      this.sorterKey = key;
      this.dirSymbol = new Array('');
      this.dirSymbol[i] = this.SymbolArray[0];
    }    
  }

}
