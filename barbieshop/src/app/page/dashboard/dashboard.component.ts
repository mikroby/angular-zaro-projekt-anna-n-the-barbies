import { map, mapTo, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';
import { BillService } from 'src/app/service/bill.service';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  numberOfProduct$:  Observable<Number> = this.productService.getNumberOf()
  activeProductNumber$:  Observable<Number> = this.productService.getNumberOfValue('active', true)
  inactiveProductNumber$:  Observable<Number> = this.productService.getNumberOfValue('active', false)
  featuredProductNumber$:  Observable<Number> = this.productService.getNumberOfValue('featured', true)

  numberOfCustomer$:  Observable<Number> = this.customerService.getNumberOf()
  activeCustomerNumber$:  Observable<Number> = this.customerService.getNumberOfValue('active', true)
  inactiveCustomerNumber$:  Observable<Number> = this.customerService.getNumberOfValue('active', false)

  numberOfOrder$:  Observable<Number> = this.orderService.getNumberOf()
  newOrderNumber$:  Observable<Number> = this.orderService.getNumberOfValue('status', 'new')
  shippedOrderNumber$:  Observable<Number> = this.orderService.getNumberOfValue('status', 'shipped')
  paidOrderNumber$:  Observable<Number> = this.orderService.getNumberOfValue('status', 'paid')
  dontPaidOrderNumber$:  Observable<Number> = this.orderService.getNumberOfValueReserve('status', 'paid')

  sumOfOrder$:  Observable<Number> = this.orderService.getSum('amount')
  newOrderAmountSum$:  Observable<Number> = this.orderService.getSumValue('status', 'new', 'amount')
  shippedOrderAmountSum$:  Observable<Number> = this.orderService.getSumValue('status', 'shipped', 'amount')
  paidOrderAmountSum$:  Observable<Number> = this.orderService.getSumValue('status', 'paid', 'amount')
  dontPaidOrderAmountSum$:  Observable<Number> = this.orderService.getSumValueReverse('status', 'paid', 'amount')

  numberOfBill$:  Observable<Number> = this.billService.getNumberOf()
  newBillNumber$:  Observable<Number> = this.billService.getNumberOfValue('status', 'new')
  paidBillNumber$:  Observable<Number> = this.billService.getNumberOfValue('status', 'paid')

  sumOfBill$:  Observable<Number> = this.billService.getSum('amount')
  newBillAmountSum$:  Observable<Number> = this.billService.getSumValue('status', 'new', 'amount')
  paidBillAmountSum$:  Observable<Number> = this.billService.getSumValue('status', 'paid', 'amount')


  constructor(
    private productService: ProductService,
    private customerService: CustomerService,
    private orderService: OrderService,
    private billService: BillService

    ) { }


    ngOnInit(): void { }





}
