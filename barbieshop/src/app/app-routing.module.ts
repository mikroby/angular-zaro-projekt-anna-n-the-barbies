import { AddCustomerComponent } from './common/add-customer/add-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCustomerComponent } from './common/edit-customer/edit-customer.component';
import { CustomerComponent } from './page/customer/customer.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductComponent } from './page/product/product.component'
import { BillListComponent } from './common/bill-list/bill-list.component';
import { BillComponent } from './page/bill/bill.component';
import { AddBillComponent } from './common/add-bill/add-bill.component';
import { BillViewerComponent } from './page/bill-viewer/bill-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'order',
    component: DashboardComponent,
  },
  {
    path: 'bill',
    component: BillComponent,
  },
  {
    path: 'edit-product/:id',
    component: DashboardComponent,
  },
  {
    path: 'edit-customer/:id',
    component: EditCustomerComponent,
  },
  {
    path: 'edit-order/:id',
    component: DashboardComponent,
  },
  {
    path: 'add-product',
    component:  DashboardComponent,
  },
  {
    path: 'add-customer',
    component:  AddCustomerComponent,
  },
  {
    path: 'add-order',
    component:  DashboardComponent,
  },
  {
    path: 'add-bill',
    component:  AddBillComponent,
  },
  {
    path: 'bill/viewer/:id',
    component:  BillViewerComponent,
  },
    {
    path: '**',
    component:  DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
