import { Router } from '@angular/router';
import { OrderService } from './../../service/order.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  tableTitle:string='Rendelések';
  color: string='info';
  buttonText:string ='Új rendelés létrehozása';

  List$: Observable<Order[]> = this.orderService.getAll()
  keys: string[] = Object.keys(new Order());
  componentName = 'order';
  buttonHiddenOpts = { edit: false, delete: false };
  columnAmountOn = 'amount'
  valueType = 'db'

  constructor(
    private orderService: OrderService,
    private dateService: DateService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  onRemove(id: number): void {
    this.orderService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName]);
        this.toastr.error('A törlés megtörtént!', 'Törlés');
        this.dateService.setToLocalStorage('order')
      }
      )
    )
  }

}
