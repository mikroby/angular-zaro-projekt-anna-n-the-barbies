import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  editproduct$: Observable<Product> = this.ar.params.pipe(
    switchMap(params => this.productService.getOne(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe(
      product => this.router.navigate(['/', 'product']),
      err => console.error(err),
    )
  }

}
