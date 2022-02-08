import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "http://localhost:3000/"
  // apiUrl: string = environment.apiUrl;

  entityName: string = 'product';

  constructor(
    private http: HttpClient,
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}${this.entityName}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}${this.entityName}/${id}`);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<Observable<any>>(`${this.apiUrl}${this.entityName}`,
    product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.patch<Product>(
      `${this.apiUrl}${this.entityName}/${product.id}`,
      product
    );
  }

  removeProduct(product: Product): Observable<any> {
    return this.http.delete(`${this.apiUrl}${this.entityName}/${product.id}`);
  }
}
