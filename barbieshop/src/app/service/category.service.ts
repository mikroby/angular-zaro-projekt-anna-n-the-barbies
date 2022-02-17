import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
import { SummaryService } from './summary.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends SummaryService<Category> {

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'category';
  }

}
