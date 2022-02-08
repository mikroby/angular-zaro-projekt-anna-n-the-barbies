import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAllProducts();
  keys$: string[] = Object.keys(new Product());
  disabled: boolean = true;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  onRemoveProduct(product: Product): void {
    this.productService.removeProduct(product).subscribe(
      product => location.reload(),
      err => console.error(err)
    );
  }

}
