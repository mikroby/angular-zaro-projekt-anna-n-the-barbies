import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.scss'],
})
export class BaseListComponent implements OnInit, AfterViewInit {

  @Input() tableTitle: string = 'Táblázat neve';
  @Input() buttonText: string = 'Új entitás hozzáadása';
  @Input() color: string = 'success';

  @Input() List$!: Observable<any[]>;
  List!: MatTableDataSource<any>;

  @Input() keys!: string[];
  @Input() componentName!: string;
  @Input() buttonHiddenOpts: { edit: boolean, delete: boolean } = { edit: false, delete: false };
  @Input() currencyPipeOn?: string = '';

  @Output() removeById: EventEmitter<number> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns!: string[];
  selectedColumns!: string[];
  tableEnabled: boolean = false;
  filterKey: string = '';
  phrase: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.List$.subscribe(
      result => {
        this.List = new MatTableDataSource<any>(result);
        this.List.paginator = this.paginator;
        this.List.sort = this.sort;
        this.tableEnabled = true;
        this.List.filterPredicate = this.filterFunction;
      }
    );
  }

  ngAfterViewInit() {
    this.selectedColumns = [...this.keys];
    this.displayedColumns = [...this.selectedColumns, 'options'];
    this.ngOnInit();
  }

  applyFilter() {
    const jsonString = JSON.stringify({ phrase: this.phrase, filterKey: this.filterKey })
    this.List.filter = jsonString;

    if (this.List.paginator) {
      this.List.paginator.firstPage();
    }
  }

  filterFunction(data: any, jsonString: string) {
    const filterObject = JSON.parse(jsonString);
    const phrase = filterObject.phrase.toLowerCase();
    const filterKey = filterObject.filterKey;

    if (!phrase) { return true };

    let array = [];

    if (filterKey) {
      array[0] = typeof data[filterKey] === 'object' ?
        Object.values(data[filterKey]) : data[filterKey];
    } else {
      array = Object.keys(data)
        .map(key => typeof data[key] === 'object' ?
          Object.values(data[key]) : data[key]);
    }
    return array.flat().join(' ').trim().toLowerCase().includes(phrase);
  };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  onRemove(id: number): void {
    this.removeById.emit(id);
  }

  isBoolean(value: any): boolean {
    return (typeof value === 'boolean');
  }

  isNestedObject(value: any): boolean {
    return (typeof value === 'object');
  }

  colSelectionChanged(): void {

    if (!this.selectedColumns.length) {
      this.selectedColumns.push('id');
    };

    const contains = this.displayedColumns.filter(item =>
      item === 'options' ? true : this.selectedColumns.includes(item));

    const differs = this.selectedColumns
      .filter(item => !(this.displayedColumns.includes(item)))

    this.displayedColumns = [...contains, ...differs];
  }
}
