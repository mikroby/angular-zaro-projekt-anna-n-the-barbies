import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bill } from '../model/bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'bill';

  constructor(
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
  }
}
