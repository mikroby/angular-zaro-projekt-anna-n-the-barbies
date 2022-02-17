import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends SummaryService<Product> {

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'product';
  }

}

