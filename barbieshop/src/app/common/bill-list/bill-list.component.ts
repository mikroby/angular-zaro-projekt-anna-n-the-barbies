import { BillService } from './../../service/bill.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  billList$: Observable<Bill[]> = this.billService.getAll();
  keys: string[] = Object.keys(new Bill());

  constructor(
    private billService: BillService,
  ) { }

  ngOnInit(): void {
  }

}
