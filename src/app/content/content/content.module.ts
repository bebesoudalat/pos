import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { ManageDataComponent } from 'src/app/manage-data/manage-data.component';
import { SaleComponent } from 'src/app/sale/sale.component';
import { OrderComponent } from 'src/app/order/order.component';
import { ImportComponent } from 'src/app/import/import.component';
import { ReportComponent } from 'src/app/report/report.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RootNavComponent } from 'src/app/root-nav/root-nav.component';
import { AddOrderNewproductComponent } from 'src/app/add-order-newproduct/add-order-newproduct.component';
import { AllProductComponent } from 'src/app/all-product/all-product.component';
import { CategoryComponent } from 'src/app/category/category.component';
import { ConfirmSalePopupComponent } from 'src/app/confirm-sale-popup/confirm-sale-popup.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { ImportDetailComponent } from 'src/app/import-detail/import-detail.component';
import { LoginComponent } from 'src/app/login/login.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { OrderDetailComponent } from 'src/app/order-detail/order-detail.component';
import { OutOfStockComponent } from 'src/app/out-of-stock/out-of-stock.component';
import { PopupAddCategoryComponent } from 'src/app/popup-add-category/popup-add-category.component';
import { PopupAddProductComponent } from 'src/app/popup-add-product/popup-add-product.component';
import { PopupAddSupplierComponent } from 'src/app/popup-add-supplier/popup-add-supplier.component';
import { PopupAddUnitComponent } from 'src/app/popup-add-unit/popup-add-unit.component';
import { PopupEditCategoryComponent } from 'src/app/popup-edit-category/popup-edit-category.component';
import { PopupEditProductComponent } from 'src/app/popup-edit-product/popup-edit-product.component';
import { PopupEditSupplierComponent } from 'src/app/popup-edit-supplier/popup-edit-supplier.component';
import { PopupEditUnitComponent } from 'src/app/popup-edit-unit/popup-edit-unit.component';
import { ProductComponent } from 'src/app/product/product.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { SupplierComponent } from 'src/app/supplier/supplier.component';
import { UnitComponent } from 'src/app/unit/unit.component';
import { ContentComponent } from './content.component';
import { NgxPrintModule } from 'ngx-print';
import { SaleDetailComponent } from 'src/app/sale-detail/sale-detail.component';

import { OrderlistComponent } from 'src/app/orderlist/orderlist.component';
import { ShowImportDetailComponent } from 'src/app/show-import-detail/show-import-detail.component';
import { OrderListDetailComponent } from 'src/app/order-list-detail/order-list-detail.component';
import { EditOrderComponent } from 'src/app/edit-order/edit-order.component';
import { PopupAddEmployeeComponent } from 'src/app/popup-add-employee/popup-add-employee.component';
import { PrintReportComponent } from 'src/app/print-report/print-report.component';



@NgModule({
  declarations: [
    RootNavComponent,
    HomeComponent,
    SaleComponent,
    ProductComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    AllProductComponent,
    CategoryComponent,
    UnitComponent,
    SupplierComponent,
    ManageDataComponent,
    PopupEditProductComponent,
    PopupAddProductComponent,
    PopupAddCategoryComponent,
    PopupEditCategoryComponent,
    PopupAddUnitComponent,
    PopupEditUnitComponent,
    PopupAddSupplierComponent,
    PopupEditSupplierComponent,
    LoginComponent,
    RegisterComponent,
    OrderComponent,
    ConfirmSalePopupComponent,
    AddOrderNewproductComponent,
    OutOfStockComponent,
    ImportComponent,
    OrderDetailComponent,
    ReportComponent,
    ImportDetailComponent,
    SaleDetailComponent,
    ContentComponent,
    OrderlistComponent,
    ShowImportDetailComponent,
    OrderListDetailComponent,
    EditOrderComponent,
    PopupAddEmployeeComponent,
    PrintReportComponent



  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTableModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    NgxPrintModule
    
  ]
})
export class ContentModule { }
