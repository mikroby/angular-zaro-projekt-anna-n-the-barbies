import { BillService } from './../../service/bill.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  tableTitle:string='Számlák';
  color: string='rose';

  List$: Observable<Bill[]> = this.billService.getAll();
  keys: string[] = Object.keys(new Bill());
  componentName = 'bill';
  buttonHiddenOpts = { edit: false, delete: true };
  currencyPipeOn = 'amount';

  constructor(
    private billService: BillService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRemove(id: number): void {
    this.billService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName])
      }
      )
    )
  }

}
