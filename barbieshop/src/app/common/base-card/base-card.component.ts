import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent implements OnInit {

  @Input() title!: string;
  @Input() row!: number;
  @Input() colorClass!: string;
  @Input() cardTitle1!: string;
  @Input() cardTitleValue1$!: Observable<Number>;
  @Input() cardTitle2?: string;
  @Input() cardTitleValue2$?: Observable<Number>;
  @Input() theadTitle!: string[];
  @Input() cardTableValue1$!: Observable<Number>;
  @Input() cardTableValue2$!: Observable<Number>;
  @Input() cardTableValue3$?: Observable<Number>;
  @Input() cardTableValue4$?: Observable<Number>;
  @Input() cardTableValue5$?: Observable<Number>;
  @Input() valueType!: string;
  @Input() valueType2?: string;

  @Input() diagrammTitle!: string;
  @Input() number!: number;
  @Input() type!: string;
  @Input() chartValue1$!: Observable<Number>;
  @Input() chartValue2$!: Observable<Number>;
  @Input() chartValue3$?: Observable<Number>;
  @Input() chartValue4$?: Observable<Number>;
  @Input() chartValue5$?: Observable<Number>;
  @Input() chartValue6$?: Observable<Number>;
  @Input() colors!: string[];
  @Input() options!: Object;
  @Input() keys!: string[];
  @Input() values!: string[]
  @Input() timeNumber!: number
  @Input() timeFormat!: string

  constructor(
    private dateService: DateService
    ) { }

  ngOnInit(): void { }


}
