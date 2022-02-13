import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill-viewer',
  templateUrl: './bill-viewer.component.html',
  styleUrls: ['./bill-viewer.component.scss']
})
export class BillViewerComponent implements OnInit {

  bill$: Observable<Bill> = this.activatedRoute.params.pipe(
    switchMap( params => this.billService.getOne(params['id']))
  )

  constructor(
    private activatedRoute: ActivatedRoute,
    private billService: BillService
  ) { }

  ngOnInit(): void {
  }

}
