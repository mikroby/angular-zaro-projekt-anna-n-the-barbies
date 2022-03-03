import { ProductService } from 'src/app/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ToastrService } from 'ngx-toastr';
import { DateService } from 'src/app/service/date.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  product!: Product;
  newProduct: Product = new Product();
  id!: string;

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private dateService: DateService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog
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
        () => {
        this.router.navigate(['/', 'product']);
        this.toastr.success('A termék hozzáadása sikeres volt!', 'Hozzáadás');
        this.dateService.setToLocalStorage('product')
     });
    } else {
      this.productService.update(product).subscribe(
        product => {
        this.router.navigate(['/', 'product']);
        this.toastr.info('A módosítás megtörtént!', 'Módosítás');
        this.dateService.setToLocalStorage('product')
    });
   }
  }

  onRemove(product: Product): void {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Megerősítés',
        message: 'Biztos vagy benne, hogy törölni szeretnéd?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.productService.delete(product.id).subscribe(
          product => {
            this.router.navigate(['/', 'product']);
            this.toastr.error('A törlés megtörtént!', 'Törlés');
            this.dateService.setToLocalStorage('product')
          });
      }
    });
}

}

