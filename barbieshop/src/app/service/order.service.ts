import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends SummaryService<Order> {

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName='order';
   }

}
