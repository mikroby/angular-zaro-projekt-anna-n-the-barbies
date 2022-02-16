import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-chartjs';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { CustomerListComponent } from './common/customer-list/customer-list.component';
import { CustomerComponent } from './page/customer/customer.component';
import { ProductComponent } from './page/product/product.component';
import { EditCustomerComponent } from './common/edit-customer/edit-customer.component';
import { CustomCurrencyPipe } from './pipe/custom-currency.pipe';
import { EditBillComponent } from './common/edit-bill/edit-bill.component';
import { BillListComponent } from './common/bill-list/bill-list.component';
import { BillComponent } from './page/bill/bill.component';
import { EditProductComponent } from './common/edit-product/edit-product.component';
import { OrderComponent } from './page/order/order.component';
import { OrderListComponent } from './common/order-list/order-list.component';
import { EditOrderComponent } from './common/edit-order/edit-order.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { BaseListComponent } from './common/base-list/base-list.component';
import { BarComponent } from './common/chart/bar/bar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ProductListComponent,
    CustomerListComponent,
    CustomerComponent,
    ProductComponent,
    EditCustomerComponent,
    EditProductComponent,
    BillListComponent,
    BillComponent,
    EditBillComponent,
    CustomCurrencyPipe,
    OrderComponent,
    OrderListComponent,
    EditOrderComponent,
    SorterPipe,
    FilterPipe,
    SpinnerComponent,
    BaseListComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartModule,
    NoopAnimationsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
