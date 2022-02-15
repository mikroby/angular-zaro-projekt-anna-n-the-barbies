import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  tableTitle:string='Termékek';
  color: string='warning';

  List$: Observable<Product[]> = this.productService.getAll();
  keys: string[] = Object.keys(new Product());
  componentName = 'product';
  buttonHiddenOpts = { edit: false, delete: false };
  currencyPipeOn = 'price';

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  onRemove(id: number): void {
    this.productService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName]);
        this.toastr.error('A törlés megtörtént!', 'Törlés',{
          timeOut: 3000,
        });
      }
      )
    )
  }

}
