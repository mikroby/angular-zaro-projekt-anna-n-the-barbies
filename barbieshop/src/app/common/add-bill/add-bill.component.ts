import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {

  bill = new Bill();

  constructor(
    private billService: BillService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onAddBill(bill: Bill): void {
    this.billService.create(bill).subscribe(
      bill => this.router.navigate(['/bill']),
      err => console.error(err)
    );
  }

}
