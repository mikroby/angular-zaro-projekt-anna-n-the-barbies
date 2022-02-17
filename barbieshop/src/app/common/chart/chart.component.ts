import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() number!: number;
  @Input() type!: string;
  @Input() Value1$!: Observable<Number>;
  @Input() Value2$!: Observable<Number>;
  @Input() Value3$?: Observable<Number>;
  @Input() Value4$?: Observable<Number>;
  @Input() colors!: string[];
  @Input() options!: Object;
  @Input() keys!: string[];
  @Input() values!: string[]

    constructor( ) {   }

    ngOnInit(): void {   }


}
