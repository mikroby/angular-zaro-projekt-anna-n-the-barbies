import { Customer } from 'src/app/model/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  new: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
