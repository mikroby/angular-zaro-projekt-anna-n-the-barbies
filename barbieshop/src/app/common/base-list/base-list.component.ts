import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component'

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
  @Input() columnAmountOn?: string = '';
  @Input() valueType?: string;
  @Input() sortPropIfObject!: string;

  @Output() removeById: EventEmitter<number> = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort = new MatSort();  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns!: string[];
  selectedColumns!: string[];
  tableEnabled: boolean = false;
  filterKey: string = '';
  phrase: string = '';

  numberOfRow!: number
  sumOfAmount!: number

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {    
    this.List$.subscribe(
      result => {
        this.List = new MatTableDataSource<any>(result)
        this.tableEnabled = true;
        
        this.paginator._intl.itemsPerPageLabel = 'Sor / lap:';
        this.paginator._intl.nextPageLabel = 'Következő lap';
        this.paginator._intl.previousPageLabel = 'Előző lap';
        this.paginator._intl.lastPageLabel = 'Utolsó lap';
        this.paginator._intl.firstPageLabel = 'Első lap';
        
        this.List.paginator = this.paginator;
        this.List.filterPredicate = this.filterFunction;
        this.sort.disableClear = true;
        this.List.sort = this.sort;        
        this.List.sortingDataAccessor = (row: any, colName: string): string => {
          if (typeof row[colName] === 'object') {            
            return row[colName][this.sortPropIfObject] as string
          }
          return row[colName] as string;
        }
        this.numberOfRow = this.List.data.length;
        this.sumOfAmount = this.List.data.map(item => item['amount'])
          .reduce((a, b) => a + b)
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
    this.numberOfRow = this.List.filteredData.length
    this.sumOfAmount = (this.List.filteredData.length != 0) ? this.List.filteredData
      .map(item => item[this.columnAmountOn as string]).reduce((a, b) => a + b) : 0

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
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Megerősítés',
        message: 'Biztos vagy benne, hogy törölni szeretnéd?'
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.removeById.emit(id);
      }
    });
  }


  isBoolean(value: any): boolean {
    return (typeof value === 'boolean');
  }

  isNestedObject(value: any): boolean {
    return (typeof value === 'object');
  }

  colSelectionChanged(): void {
    if (!this.selectedColumns.length) { this.selectedColumns.push(this.keys[0]) };

    const contains = this.displayedColumns.filter(item =>
      item === 'options' ? true : this.selectedColumns.includes(item));
    const differs = this.selectedColumns
      .filter(item => !(this.displayedColumns.includes(item)))

    this.displayedColumns = [...contains, ...differs];
  }
}
