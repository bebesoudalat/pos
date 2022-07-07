import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subject, switchMap } from 'rxjs';
import { ConfirmSalePopupComponent } from '../confirm-sale-popup/confirm-sale-popup.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  displayProduct:string[] = ['image','proName','qty','sell_price'];

  dataSource1:any;
  dataSource2:any;
  data2:any;
  data:any=[];
  cartItem:any=[];
  total:any = [];
  TotalPrice:any;
  sale_qty:any;

  keyword:any =[]

  categoryList:any = []

  onSearchProduct = new Subject<any>();

  constructor(private service:RestAPIService, public dialogRef : MatDialog) {
    this.onSearchProduct.pipe(switchMap((searchProduct)=>
    this.service.search_Product(searchProduct))).subscribe((value)=> 
    console.log('test',value));
   }

  ngOnInit(): void {
    this.service.product().subscribe(res=>{
      this.data2=res.data;
      console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);

    })
    this.service.category().subscribe(res=>{
      this.data=res.data 
      // console.log(this.data)
      this.dataSource1 = new MatTableDataSource(this.data);
    })
   
  }

  search_Product(searchProduct:any){
    console.log()
    this.onSearchProduct.next(searchProduct);
    this.service.search_Product(searchProduct).subscribe(res=>{
      console.log(res)
      this.data2=res.data;
      // console.log(this.data4)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })
  }

  

  confirm_sale_dialog(data:any){
  const dialogConfig = new MatDialogConfig;
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus= true;
    this.dialogRef.open(ConfirmSalePopupComponent,{data});
  }

  addToCart(data:any){
    let productExists = false
     
    for (let i in this.cartItem) {
          if (this.cartItem[i].productID === data.productID) {
            this.cartItem[i].Qty++
            productExists = true
            break;
          }
        }
    if(!productExists){
      this.cartItem.push({
                productID:data.productID,
                productName:data.productName,
                Qty:1,
                orQty:data.Qty,
                sell_price:data.sell_price
              })
    }
    this.calTotal(this.cartItem)
// console.log(this.cartItem)
}
cal(sellprice:any,qty:any){
return sellprice*qty
}

increase(i:any,item:any){
  
  if (this.cartItem[i].Qty>=item.orQty) {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  } else {
    if (this.cartItem[i].Qty<1 ) {
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    }else{
      this.cartItem[i].Qty++ 
        this.calTotal(this.cartItem)
    }
  }
  // console.log('i ='+i)
  // console.log(item.orQty)
      
}

decrease(i:any){
  if (this.cartItem[i].Qty<=1) {
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }else{
    this.cartItem[i].Qty-- 
      this.calTotal(this.cartItem)
  }
}

deleteItem(i:any){
  this.cartItem.splice([i],1)
  this.calTotal(this.cartItem)
}


calTotal(data:any){

  console.log(data.length)
  this.TotalPrice=0
  let total=0
  for (let i = 0; i < data.length; i++) {
     total= data[i].sell_price*data[i].Qty;
     this.TotalPrice = total+this.TotalPrice
  }
  console.log(this.TotalPrice)
  return this.TotalPrice
}

onSelectcategory(category:any){
  let data = this.data2.filter((res: { cateID: any; })=>{
    return res.cateID.toString().match(category.toString())
  })
  this.dataSource2 = new MatTableDataSource(data);
}

addSale(){
  this.service.sale(this.cartItem).subscribe(res=>{
    console.log(this.cartItem)
  })
}

}
