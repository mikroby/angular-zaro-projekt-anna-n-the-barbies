import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './page/customer/customer.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductComponent } from './page/product/product.component'

const routes: Routes = [
  {
    path: 'dashboard',
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
    path: 'product-list',
    component: DashboardComponent,
  },
  {
    path: 'customer-list',
    component: DashboardComponent,
  },
  {
    path: 'order-list',
    component: DashboardComponent,
  },
  {
    path: 'bill-list',
    component: DashboardComponent,
  },
  {
    path: 'edit-product',
    component: DashboardComponent,
  },
  {
    path: 'edit-customer',
    component: DashboardComponent,
  },
  {
    path: 'edit-order',
    component: DashboardComponent,
  },
  {
    path: 'add-product',
    component:  DashboardComponent,
  },
  {
    path: 'add-customer',
    component:  DashboardComponent,
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
