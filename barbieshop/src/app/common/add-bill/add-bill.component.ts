import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {

  newBill: Bill = new Bill();
  bill!: Bill;
  id!: string;


  constructor(
    private ar: ActivatedRoute,
    private billService: BillService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap(params => this.id = params['id'])).subscribe(
        () => {
          if (this.id === '0') {
            this.bill = this.newBill;
          } else {
            this.billService.getOne(Number(this.id)).subscribe(
              (result) => this.bill = result
            )
          }
        }
      );
  }
  onAddBill(bill: Bill): void {
    this.billService.create(bill).subscribe(
      bill => this.router.navigate(['/bill']),
      err => console.error(err)
    );
  }

}
