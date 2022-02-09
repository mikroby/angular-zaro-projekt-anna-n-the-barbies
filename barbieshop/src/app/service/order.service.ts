import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName='order';
   }

}
