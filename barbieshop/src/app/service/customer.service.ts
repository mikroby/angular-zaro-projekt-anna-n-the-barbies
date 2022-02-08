import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = "http://localhost:3000/"
  //apiUrl: string = environment.apiUrl
  entityName: string = 'customer'

  constructor(private http: HttpClient) { }

  getAllCustomer() : Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}${this.entityName}`);
  }

  getOneCustomer(id: string | number) : Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${this.apiUrl}${this.entityName}/${customer.id}`, customer)
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}${this.entityName}`, customer);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this.apiUrl}${this.entityName}/${id}`)
  }
}
