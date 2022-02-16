import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { statusKeys } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  selectionKeys: string[] = statusKeys;
  numbers: number[] = []

  newOrderNumber$:  Observable<Number> = this.orderService.getNumberOfValue('status', 'new')
  shippedOrderNumber$:  Observable<Number> = this.orderService.getNumberOfValue('status', 'shipped')
  paidOrderNumber$:  Observable<Number> = this.orderService.getNumberOfValue('status', 'paid')

  constructor(
    private orderService: OrderService
    ) {   }

    ngOnInit(): void {     }


      values(): Array<number> {
        this.numbers = []
        this.orderService.getNumberOfValue('status', 'new').subscribe(
          item => this.numbers.push(item)
          )
        this.orderService.getNumberOfValue('status', 'shipped').subscribe(
          item => this.numbers.push(item)
          )
        this.orderService.getNumberOfValue('status', 'paid').subscribe(
          item => this.numbers.push(item)
          )
        return this.numbers
      }

       type = 'bar';
        data = {
          labels: [this.selectionKeys[0], this.selectionKeys[1], this.selectionKeys[2]],
          datasets: [
            {
              label: "Rendelésel eloszlása",
              fill:'true',
              backgroundColor: ["#8a3ab9", "#4c68d7","#cd486b","#fbad50","#bc2a8d"],
              data: [350,310,331]
            }
          ]
        };

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
