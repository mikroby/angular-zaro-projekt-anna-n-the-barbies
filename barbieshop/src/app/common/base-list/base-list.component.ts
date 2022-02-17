import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss']
})
export class BaseListComponent implements OnInit {

  @Input() tableTitle:string='Táblázat neve';
  @Input() buttonText:string='Új entitás hozzáadása';
  @Input() color:string ='success';

  @Input() List$!: Observable<any[]>;
  @Input() keys!: string[];
  @Input() componentName!: string;
  @Input() buttonHiddenOpts: { edit: boolean, delete: boolean } = { edit: false, delete: false };
  @Input() currencyPipeOn?: string = '';

  @Output() removeById: EventEmitter<number> = new EventEmitter();

  phrase: string = '';
  filterKey: string = '';
  sorterKey: string = '';
  direction: number = 1;
  dirSymbol!: string[];
  SymbolArray: string[] = ['▲', '▼'];

  constructor(
  ) { }

  ngOnInit(): void {
    this.dirSymbol = new Array(this.keys.length).fill('');
    this.direction = 1;
    this.dirSymbol[0] = this.SymbolArray[0];
    this.sorterKey = this.keys[0];
  }

  onRemove(id: number): void {
    this.removeById.emit(id);
  }

  changeSortDirection(col: string, i: number): void {
    if (col === this.sorterKey) {
      this.direction *= -1;
      const dirIndex = this.direction === 1 ? 0 : 1;
      this.dirSymbol[i] = this.SymbolArray[dirIndex];
    } else {
      this.direction = 1;
      this.sorterKey = col;
      this.dirSymbol.fill('');
      this.dirSymbol[i] = this.SymbolArray[0];
    }
  }

  isBoolean(value: any): boolean {
    return (typeof value === 'boolean');
  }

}
