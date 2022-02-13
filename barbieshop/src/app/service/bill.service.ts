import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill } from '../model/bill';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseService<Bill> {

  //apiUrl: string = environment.apiUrl;
  //: string = 'bill';

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'bill';
  }

  /*constructor(
    private http: HttpClient,
  ) { }
  getAllBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(`${this.apiUrl}${this.entityName}`);
  }

  getOneBill(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  addBill(bill: Bill): Observable<any> {
    return this.http.post<Observable<any>>(
      `${this.apiUrl}${this.entityName}`, bill);
  }*/
}
