import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { switchMap } from 'rxjs';
import { Bill, statusKeys } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { DateService } from 'src/app/service/date.service';

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
    private dateService: DateService,
    private router: Router,
    private toastr: ToastrService,
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
    if (this.id === '0') {
      this.billService.create(bill).subscribe(
        response => this.router.navigate(['/', 'bill']));
        this.toastr.success('A számla hozzáadása sikeres volt!', 'Hozzáadás');
        this.dateService.setToLocalStorage('bill')
    } else {
      this.billService.update(bill).subscribe(
        response => this.router.navigate(['/', 'bill']));
        this.toastr.info('A módosítás megtörtént!', 'Módosítás');
        this.dateService.setToLocalStorage('bill')
    }
  }

}
