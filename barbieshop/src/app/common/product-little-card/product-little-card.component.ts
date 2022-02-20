import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DateService } from 'src/app/service/date.service';
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

  timeNumber!: number
  timeFormat!: string

  constructor(
    private productService: ProductService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.timeNumber = this.dateService.editUpdateTimeNumber('product')
    this.timeFormat = this.dateService.editUpdateTimeFormat('product')
    setInterval(() => this.updateTime(), 1000*60)
  }

  updateTime() {
    this.timeNumber = this.dateService.editUpdateTimeNumber('product')
    this.timeFormat = this.dateService.editUpdateTimeFormat('product')
  }

}
