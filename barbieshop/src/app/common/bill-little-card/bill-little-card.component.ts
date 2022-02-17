import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill-little-card',
  templateUrl: './bill-little-card.component.html',
  styleUrls: ['./bill-little-card.component.scss']
})
export class BillLittleCardComponent implements OnInit {

  colorClass: string =  "card-header-rose";
  materialIcon: string = "storage";
  newBillAmountSum$:  Observable<Number> = this.billService.getSumValue('status', 'new', 'amount')
  cardBodyTitle: string = "Még nem fizetett számlák összege"
  valueType: string = "Ft"

  constructor(
    private billService: BillService,
  ) { }

  ngOnInit(): void {
  }

}
