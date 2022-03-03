import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { Order, statusKeys } from 'src/app/model/order';
import { DateService } from 'src/app/service/date.service';
import { OrderService } from 'src/app/service/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit {

  order!: Order;

  newOrder: Order = new Order();

  id!: string;

  selectionKeys: string[] = statusKeys;


  constructor(
    private orderService: OrderService,
    private dateService: DateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private dialog: MatDialog
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

  onSaveOrder(order: Order): void {

    if (this.id === '0') {
      this.orderService.create(order).subscribe(
        response => this.router.navigate(['/', 'order']));
        this.toastr.success('A rendelés hozzáadása sikeres volt!', 'Hozzáadás');
        this.dateService.setToLocalStorage('order')
    } else {
      this.orderService.update(order).subscribe(
        response => this.router.navigate(['/', 'order']));
        this.toastr.info('A módosítás megtörtént!', 'Módosítás');
        this.dateService.setToLocalStorage('order')
    }
  }

  onRemoveOrder(order: Order): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Megerősítés',
        message: 'Biztos vagy benne, hogy törölni szeretnéd?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.orderService.delete(order.id).subscribe(
          response => this.router.navigate(['/', 'order']));
          this.toastr.error('A törlés megtörtént!', 'Törlés');
          this.dateService.setToLocalStorage('order')
      }
    });
}



}
