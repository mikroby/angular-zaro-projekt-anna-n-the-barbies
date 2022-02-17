import { SummaryService } from './summary.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService extends SummaryService<Bill> {

  constructor(
    public override http: HttpClient
  ) {
    super(http);
    this.entityName = 'bill';
  }
}
