import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';
import { AuthGuard } from './auth/auth.guard';
import { CategoryComponent } from './category/category.component';
import { ContentComponent } from './content/content/content.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImportDetailComponent } from './import-detail/import-detail.component';
import { ImportComponent } from './import/import.component';
import { LoginComponent } from './login/login.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';
import { OutOfStockComponent } from './out-of-stock/out-of-stock.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { SaleComponent } from './sale/sale.component';
import { UnitComponent } from './unit/unit.component';


const routes: Routes = [{ 
  path:'',
    canActivate:[AuthGuard],
    component: ContentComponent,
  children:[  {
    path:'',
    component:HomeComponent
  },
  {
    path:'sale',
    component: SaleComponent
  },
  {
    path:'product',
    component:ProductComponent
  }
  ,
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'allproduct',
    component:AllProductComponent
  },
  {
    path:'category',
    component: CategoryComponent
  },
  {
    path:'unit',
    component: UnitComponent
  },
  {
    path:'manage-data',
    component: ManageDataComponent
  },{
    path:'order',
    component: OrderComponent
  },
  {
    path:'out_of_stock',
    component: OutOfStockComponent
  },
  {
    path:'order-detail/:orderID',
    component: OrderDetailComponent
  },
  {
    path:'import',
    component: ImportComponent
  },
  {
    path:'report',
    component: ReportComponent
  },
  {
    path:'import-detail/:orderID',
    component:ImportDetailComponent
  },
  {
    path:'sale-detail/:saleID',
    component:SaleDetailComponent
  }
]
  },
  {
    path:'login',
    component: LoginComponent
  },


{
  path:'register',
  component: RegisterComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
