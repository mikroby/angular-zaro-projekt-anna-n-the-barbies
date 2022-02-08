import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl: string = environment.apiUrl;
  entityName: string = 'category';

  constructor(
    private http: HttpClient,
  ) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}${this.entityName}`);
  }

  getOneCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  addCategory(category: Category): Observable<any> {
    return this.http.post<Observable<any>>(
      `${this.apiUrl}${this.entityName}`, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.patch<Category>(
      `${this.apiUrl}${this.entityName}/${category.id}`,
      category);
  }

  deleteCategory(category: Category): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}${this.entityName}/${category.id}`);

  }
}
