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
    EditCustomerComponent
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
