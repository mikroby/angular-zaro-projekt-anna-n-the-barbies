import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  new: boolean = true
  customerService: any;

  constructor(
    private dateService: DateService
  ) { }

  ngOnInit(): void { }

}
