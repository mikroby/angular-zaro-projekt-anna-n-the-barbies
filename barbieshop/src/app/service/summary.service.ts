import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SummaryService<T extends { id: number, [key: string]: any  }> extends BaseService<T> {

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
  }

  getNumberOf(): Observable<number> {
    return  super.getAll().pipe(map(item => item.length))
  }

  getNumberOfValue(prop: string, value: string | boolean): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).length))
  }

  getNumberOfValue2(prop: string, prop2: string, value: string | boolean, value2: string | boolean): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).filter(i => i[prop2] == value2).length))
  }

  getNumberOfValueReserve(prop: string, value: string | boolean): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] != value).length))
  }

  getSum(prop: string): Observable<number> {
    return  super.getAll().pipe(map(item => item.map(k => k[prop])
    .reduce((a, b) => a + b)))
  }

  getSumValue(prop: string, value: string | boolean | number, prop2: string): Observable<number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).map(k => k[prop2])
    .reduce((a, b) => a + b)))
  }

  getSumValue2(prop: string, value: string | boolean | number, prop2: string): Observable<T[]> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] == value).map(k => k[prop2])))
  }

  getSumValueReverse(prop: string, value: string | boolean, prop2: string): Observable<Number> {
    return  super.getAll().pipe(map(item => item.filter(i => i[prop] != value).map(k => k[prop2])
    .reduce((a, b) => a + b)))
  }
}
