import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChartModule } from 'angular2-chartjs';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';

const MyGoogleChartsSettings: GoogleChartsSettings = {
  mapsApiKey: 'YOUR API KEY',
  googleChartsVersion: '46.2',
  language: 'en',
};

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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './common/chart/chart.component';
import { BaseCardComponent } from './common/base-card/base-card.component';
import { BaseLitleCardComponent } from './common/base-little-card/base-little-card.component';
import { ProductLittleCardComponent } from './common/product-little-card/product-little-card.component';
import { CustomerLittleCardComponent } from './common/customer-little-card/customer-little-card.component';
import { OrderLittleCardComponent } from './common/order-little-card/order-little-card.component';
import { BillLittleCardComponent } from './common/bill-little-card/bill-little-card.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { CustomerCardComponent } from './common/customer-card/customer-card.component';
import { OrderCardComponent } from './common/order-card/order-card.component';
import { BillCardComponent } from './common/bill-card/bill-card.component';
import { CustomerGeochartComponent } from './common/customer-geochart/customer-geochart.component';
// modules for mat-table
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ConfirmDialogComponent } from './common/confirm-dialog/confirm-dialog.component';
import { CustomNumberPipe } from './pipe/custom-number.pipe';

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
    ChartComponent,
    BaseCardComponent,
    BaseLitleCardComponent,
    ProductLittleCardComponent,
    CustomerLittleCardComponent,
    OrderLittleCardComponent,
    BillLittleCardComponent,
    ProductCardComponent,
    CustomerCardComponent,
    OrderCardComponent,
    BillCardComponent,
    CustomerGeochartComponent,
    ConfirmDialogComponent,
    CustomNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-center',
    }),
    ChartModule,
    Ng2GoogleChartsModule,

    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    DragDropModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: 'googleChartsSettings',
      useValue: MyGoogleChartsSettings,
    },
  ],
  entryComponents: [ConfirmDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
