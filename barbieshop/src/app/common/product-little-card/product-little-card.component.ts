import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-little-card',
  templateUrl: './product-little-card.component.html',
  styleUrls: ['./product-little-card.component.scss']
})
export class ProductLittleCardComponent implements OnInit {

  colorClass: string =  "card-header-warning";
  materialIcon: string = "shop_two";
  activeProductNumber$:  Observable<Number> = this.productService.getNumberOfValue('active', true);
  cardBodyTitle: string = "Aktív termékek száma"
  valueType: string = "db"

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
