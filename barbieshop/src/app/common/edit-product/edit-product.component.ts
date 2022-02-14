import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  // editproduct$: Observable<Product> = this.ar.params.pipe(
  //   switchMap(params => this.productService.getOne(params['id']))
  // );
  product!: Product;
  newProduct: Product = new Product();
  id!: string;

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap(params => this.id = params['id'])).subscribe(
        () => {
          if (this.id === '0') {
            this.product = this.newProduct;
          } else {
            this.productService.getOne(Number(this.id)).subscribe(
              (result) => this.product = result
            )
          }
        }
      );
  }

  onUpdate(product: Product): void {
    if (product.id === 0) {
      this.productService.create(product).subscribe(
        () => this.router.navigate(['/', 'product']),
        err => console.error(err),
      )
    } else {
      this.productService.update(product).subscribe(
        product => this.router.navigate(['/', 'product']),
        err => console.error(err),
      )
    }
  }
  // onUpdate(productForm: NgForm): void {
  //   if(productForm.invalid) {
  //     alert('Kérjük, töltsön ki minden mezőt!');
  //   }

  //   const product: Product = productForm.value;

  //   this.productService.update(product).subscribe(
  //     product => this.router.navigate(['/', 'product']),
  //     err => console.error(err),
  //   )
  // }
}

