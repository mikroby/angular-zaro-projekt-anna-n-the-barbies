import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activeProductNumber$:  Observable<number> = this.productCustomer.getNumberOfValue('active', true)
  inactiveProductNumber$:  Observable<number> = this.productCustomer.getNumberOfValue('active', false)

  activeCustomerNumber$:  Observable<number> = this.customerService.getNumberOfValue('active', true)
  inactiveCustomerNumber$:  Observable<number> = this.customerService.getNumberOfValue('active', false)

  newOrderNumber$:  Observable<number> = this.orderService.getNumberOfValue('status', 'new')
  shippedOrderNumber$:  Observable<number> = this.orderService.getNumberOfValue('status', 'shipped')
  paidOrderNumber$:  Observable<number> = this.orderService.getNumberOfValue('status', 'paid')

  newBillNumber$:  Observable<number> = this.billService.getNumberOfValue('status', 'new')
  paidBillNumber$:  Observable<number> = this.billService.getNumberOfValue('status', 'paid')


  constructor(
    private productCustomer: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private billService: BillService

  ) { }

  ngOnInit(): void { }

}
