import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-little-card',
  templateUrl: './base-little-card.component.html',
  styleUrls: ['./base-little-card.component.scss']
})
export class BaseLitleCardComponent implements OnInit {

  @Input() colorClass!: string;
  @Input() materialIcon!: string;
  @Input() cardValue$!: Observable<Number>;
  @Input() cardBodyTitle!: string;
  @Input() valueType!: string;
  @Input() timeNumber!: number
  @Input() timeFormat!: string

  constructor() { }

  ngOnInit(): void {
  }

}
