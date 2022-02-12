import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { AddBillComponent } from './common/add-bill/add-bill.component';
import { BillListComponent } from './common/bill-list/bill-list.component';
import { BillViewerComponent } from './page/bill-viewer/bill-viewer.component';
import { BillComponent } from './page/bill/bill.component';
import { EditProductComponent } from './common/edit-product/edit-product.component';
import { OrderComponent } from './page/order/order.component';
import { OrderListComponent } from './common/order-list/order-list.component';
import { EditOrderComponent } from './common/edit-order/edit-order.component';
import { SorterPipe } from './pipe/sorter.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { CustomerFilterPipe } from './pipe/customer-filter.pipe';

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
    AddBillComponent,
    BillViewerComponent,
    CustomCurrencyPipe,
    OrderComponent,
    OrderListComponent,
    EditOrderComponent,
    SorterPipe,
    FilterPipe,
    CustomerFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
