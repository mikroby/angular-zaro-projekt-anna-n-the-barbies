import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  @Input() Value1$!: Observable<Number>;
  @Input() Value2$!: Observable<Number>;
  @Input() keys!: string[];
  @Input() values!: string[]

  constructor( ) {   }

    ngOnInit(): void {   }

    type = 'bar';
    options = {
      legend: {
        display: false
    },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          { display: true,
                    gridLines: {
                        display:false
                    }
                }],
        yAxes: [
          {
                    display: true,
                    gridLines: {
                        display:false
                    }
                }]
    }
    }
}
