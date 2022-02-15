import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Bill, statusKeys } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  newBill: Bill = new Bill();
  bill!: Bill;
  id!: string;

  selectionKeys: string[] = statusKeys;

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
