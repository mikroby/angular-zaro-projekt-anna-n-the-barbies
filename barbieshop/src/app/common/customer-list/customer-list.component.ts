import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DateService } from 'src/app/service/date.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  tableTitle:string='Vásárlók';
  color: string='success';
  buttonText:string ='Új vásárló létrehozása';

  List$: Observable<Customer[]> = this.customerService.getAll()
  keys: string[] = Object.keys(new Customer());
  componentName = 'customer';
  buttonHiddenOpts = { edit: false, delete: false };
  sortPropIfObject ='country';

  constructor(
    private customerService: CustomerService,
    private dateService: DateService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  onRemove(id: number): void {
    this.customerService.delete(id).subscribe(
      response => this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/', this.componentName]);
        this.toastr.error('A törlés megtörtént!', 'Törlés');
        this.dateService.setToLocalStorage('customer')
      }
      )
    )
  }

}
