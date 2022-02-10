import { AddCustomerComponent } from './common/add-customer/add-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCustomerComponent } from './common/edit-customer/edit-customer.component';
import { CustomerComponent } from './page/customer/customer.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductComponent } from './page/product/product.component';
import { EditProductComponent } from './common/edit-product/edit-product.component';

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
    component: DashboardComponent,
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
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
    component:  DashboardComponent,
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
