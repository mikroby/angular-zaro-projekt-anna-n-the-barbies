import { DateService } from 'src/app/service/date.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { hunActiveKeys } from 'src/app/model/customer';
import { hunFeaturedKeys } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  title: string = 'Termékek';
  row: number = 2;
  colorClass: string = 'card-header-warning';
  cardTitle1: string = 'Összes termék';
  cardTitleValue1$: Observable<Number> = this.productService.getNumberOf();
  cardTitle2?: string = 'Kiemelt termékek'
  cardTitleValue2$: Observable<Number> = this.productService.getNumberOfValue('featured', true);
  theadTitle: string[] = hunActiveKeys;
  cardTableValue1$: Observable<Number> = this.productService.getNumberOfValue('active', true);
  cardTableValue2$: Observable<Number> = this.productService.getNumberOfValue('active', false);
  valueType: string = 'db';

  diagrammTitle: string = 'Termékek részletes eloszlása';
  number: number = 2;
  type: string = 'bar';
  chartValue1$: Observable<Number> = this.productService.getNumberOfValue2('active', 'featured', true, true)
  chartValue2$: Observable<Number> = this.productService.getNumberOfValue2('active', 'featured', true, false);
  chartValue3$: Observable<Number> = this.productService.getNumberOfValue2('active', 'featured', false, true);
  chartValue4$: Observable<Number> = this.productService.getNumberOfValue2('active', 'featured', false, false);
  colors: string[] = ['#ff0266', '#81c784'];
  options!: Object;
  keys: string[] = hunFeaturedKeys;
  values: string[] = hunActiveKeys

  timeNumber!: number
  timeFormat!: string

  constructor(
    private productService: ProductService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.options = {
      legend: {
        display: true
    },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{ display: true,
                  stacked: true,
                    gridLines: {
                        display:false
                    }
                }],
        yAxes: [{
                    display: true,
                    stacked:true,
                    gridLines: {
                        display:false
                    }
                }]
    }
  }
  this.timeNumber = this.dateService.editUpdateTimeNumber('product')
  this.timeFormat = this.dateService.editUpdateTimeFormat('product')
  setInterval(() => this.updateTime(), 1000*60)
  }

  updateTime() {
    this.timeNumber = this.dateService.editUpdateTimeNumber('product')
    this.timeFormat = this.dateService.editUpdateTimeFormat('product')
  }
}



