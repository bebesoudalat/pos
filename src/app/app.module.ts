import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { SaleComponent } from './sale/sale.component';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomepageComponent } from './homepage/homepage.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AllProductComponent } from './all-product/all-product.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { UnitComponent } from './unit/unit.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupEditProductComponent } from './popup-edit-product/popup-edit-product.component';
import { PopupAddProductComponent } from './popup-add-product/popup-add-product.component';
import { PopupAddCategoryComponent } from './popup-add-category/popup-add-category.component';
import { PopupEditCategoryComponent } from './popup-edit-category/popup-edit-category.component';
import { PopupAddUnitComponent } from './popup-add-unit/popup-add-unit.component';
import { PopupEditUnitComponent } from './popup-edit-unit/popup-edit-unit.component';
import { PopupAddSupplierComponent } from './popup-add-supplier/popup-add-supplier.component';
import { PopupEditSupplierComponent } from './popup-edit-supplier/popup-edit-supplier.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrderComponent } from './order/order.component';
import { ConfirmSalePopupComponent } from './confirm-sale-popup/confirm-sale-popup.component';
import { AddOrderNewproductComponent } from './add-order-newproduct/add-order-newproduct.component';
import { OutOfStockComponent } from './out-of-stock/out-of-stock.component';
import { ImportComponent } from './import/import.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { ReportComponent } from './report/report.component';
import { ImportDetailComponent } from './import-detail/import-detail.component';



@NgModule({
  declarations: [
    AppComponent,
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
    ImportDetailComponent
    
  ],
  imports: [
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
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
