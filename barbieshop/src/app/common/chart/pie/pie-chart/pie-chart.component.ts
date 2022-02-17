import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() Value1$!: Observable<Number>;
  @Input() Value2$!: Observable<Number>;
  @Input() keys!: string[];
  @Input() values!: string[]

  constructor( ) {   }

    ngOnInit(): void {   }


    type = 'pie';
    options = {
      legend: {
        display: true
    },
      responsive: true,
      maintainAspectRatio: false,

    }

}
