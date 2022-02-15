import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends { id: number, [key: string]: any  }> {

  apiUrl: string = environment.apiUrl;
  //apiUrl: string = "http://localhost:3000/"

  entityName: string = '';

  constructor(
    public http: HttpClient
  ) { }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.apiUrl}${this.entityName}`);
  }

  getOne(id: number): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  create(entity: T): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${this.entityName}`, entity);
  }

  update(entity: T): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${this.entityName}/${entity.id}`, entity);
  }

  delete(id: number): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  /*getNumberOf(): Observable<number> {
    return  this.getAll().pipe(map(item => item.length))
  }

  getNumberOfValue(prop: string, value: string | boolean): Observable<number> {
    return  this.getAll().pipe(map(item => item.filter(i => i[prop] == value).length))
  }

  getNumberOfValueReserve(prop: string, value: string | boolean): Observable<number> {
    return  this.getAll().pipe(map(item => item.filter(i => i[prop] != value).length))
  }

  getSum(prop: string): Observable<number> {
    return  this.getAll().pipe(map(item => item.map(k => k[prop])
    .reduce((a, b) => a + b)))
  }

  getSumValue(prop: string, value: string | boolean | number, prop2: string): Observable<number> {
    return  this.getAll().pipe(map(item => item.filter(i => i[prop] == value).map(k => k[prop2])
    .reduce((a, b) => a + b)))
  }

  getSumValue2(prop: string, value: string | boolean | number, prop2: string): Observable<T[]> {
    return  this.getAll().pipe(map(item => item.filter(i => i[prop] == value).map(k => k[prop2])))
  }

  getSumValueReverse(prop: string, value: string | boolean, prop2: string): Observable<Number> {
    return  this.getAll().pipe(map(item => item.filter(i => i[prop] != value).map(k => k[prop2])
    .reduce((a, b) => a + b)))
  }

  getItem(prop: string, arg: string, value: number, entity: string, arg2: string): any {
    let x = this.getSumValue(prop, value, arg).subscribe(
      item => item)
    let y = this.http.get<T>(`${this.apiUrl}${entity}/${value}`).subscribe(
      item => item[arg2])
    return Number(x)*Number(y)
  }*/


}
