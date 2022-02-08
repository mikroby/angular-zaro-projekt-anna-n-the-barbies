import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'product',
    component: DashboardComponent,
  },
  {
    path: 'customer',
    component: DashboardComponent,
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
