import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  List$: Observable<Product[]> = this.productService.getAll();  
  keys: string[] = Object.keys(new Product());  
  componentName = 'product';
  buttonHiddenOpts = { edit: false, delete: false };

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {    
  }
 
  onRemove(id: number): void {
    this.productService.delete(id).subscribe(
      product => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName])
      }
      )
    )
  }

}
