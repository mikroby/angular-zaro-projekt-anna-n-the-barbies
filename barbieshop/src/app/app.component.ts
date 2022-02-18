import { Component, OnInit } from '@angular/core';
import { DateService } from './service/date.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'barbieshop';

  constructor(
    private dateService: DateService
  ) {  }

  ngOnInit(): void {
    if (!(localStorage.getItem('start'))) {
      this.dateService.setToLocalStorage('start')
    }
  }
}
