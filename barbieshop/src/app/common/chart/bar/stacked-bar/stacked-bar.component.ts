import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-stacked-bar',
  templateUrl: './stacked-bar.component.html',
  styleUrls: ['./stacked-bar.component.scss']
})
export class StackedBarComponent implements OnInit {

  @Input() Value1$!: Observable<Number>;
  @Input() Value2$!: Observable<Number>;
  @Input() Value3$!: Observable<Number>;
  @Input() Value4$!: Observable<Number>;
  @Input() keys!: string[];
  @Input() values!: string[]

  constructor( ) {   }

    ngOnInit(): void {   }


    type = 'bar';
    options = {
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





}
