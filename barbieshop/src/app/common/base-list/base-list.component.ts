import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {

  @Input() List$: Observable<T[]>

  @Input() keys: string[];

  @Input() componentName: string;

  phrase: string = '';

  filterKey: string = '';

  sorterKey: string = '';

  direction: number = 1;

  dirSymbol: string[] = new Array('');
  SymbolArray: string[] = ['▲', '▼'];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.direction=1;
    this.dirSymbol[0]=this.SymbolArray[0];
    this.sorterKey=this.keys[0];
  }

  onRemove(row: Order): void {
    this.orderService.delete(row.id).subscribe(
      order => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', `${this.componentName}`])
      }
      )
    )
  }

  changeSortDirection(key: string, i: number): void {
    if (key === this.sorterKey) {
      this.direction *= -1;
      const dirIndex = this.direction === 1 ? 0 : 1;
      this.dirSymbol[i] = this.SymbolArray[dirIndex];
    } else {
      this.direction = 1;
      this.sorterKey = key;
      this.dirSymbol = new Array('');
      this.dirSymbol[i] = this.SymbolArray[0];
    }    
  }

}
