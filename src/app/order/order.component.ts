import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material/dialog';
import { AddOrderNewproductComponent } from '../add-order-newproduct/add-order-newproduct.component';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupAddProductComponent } from '../popup-add-product/popup-add-product.component';
import Swal from "sweetalert2";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'buy_price','buy_qty', 'action'];
  displayOrder: string[] = ['proID','image', 'proName', 'qty', 'action'];
  displayOrderList : string[]=['supName', 'productName', 'buy_qty','price', 'action'];

  dataSource2:any;
  data2:any;

  submitted = false;
  data1:any;
  dataOrderlist:any = []

  data4:any =[];
  dataSource4:any;
  
  orderForm:any = FormGroup;
  listData:any = [];

  getSupID:any;

  data5:any;
  dataOutOfStock:any;

  orderItemform:any = FormGroup;

  numberww:any=0

  constructor( private dialogRef: MatDialog, public service: RestAPIService, public formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.service.supplier().subscribe(res=>{
      this.data4=res.data
      // console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })

    this.service.product().subscribe(res=>{
      this.data2=res.data
      // console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })

    this.service.showOrderList().subscribe(res=>{
      this.data1=res.data
      // console.log(this.data1)
      this.dataOrderlist = new MatTableDataSource(this.data1);
      console.log(this.data1)
    })

    this.service.OutOfStock().subscribe(res=>{
      this.data5=res.data
      // console.log(this.data1)
      this.dataOutOfStock = new MatTableDataSource(this.data5);
      console.log(this.data5)
    })

    this.dataOrderlist = new MatTableDataSource(this.listData);


    this.orderForm = this.formBuilder.group({
      'buy_qty' : ['', [Validators.required]]
    })

    
  }
  add_newproduct(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    let dialog = this.dialogRef.open(AddOrderNewproductComponent, dialogConfig)
    
  
}

  addItem(){
  
  this.listData.push(this.orderForm.value);
  this.orderForm.reset();
  }

  // addItem(){
  //   this.service.addItem_orderList(this.orderForm.value).subscribe(res => {
  //     console.log(res)
  //   })
  // }

  addItem2(data:any){
    let productExists = false
    let qty_buy=(<HTMLInputElement>document.getElementById(data.productID)).value
    for (let i in this.listData) {
          if (this.listData[i].productID === data.productID) {
            this.listData[i].Qty++
            productExists = true
            break;
          }
        }
    if(!productExists){
      this.listData.push({
                productID:data.productID,
                productName:data.productName,
                supID:data.supID,
                supName:data.supName,
                Qty:data.Qty,
                buy_qty:qty_buy,
                buy_price:data.buy_price
              })
    }
    Swal.fire({
      text: 'ທ່ານໄດ້ເພີ່ມລາຍການຈັດຊື້ສຳເລັດແລ້ວ',
      icon: 'success',
      confirmButtonText: 'ຕົກລົງ',
    })
// console.log(this.listData)
}

increase(i:any,item:any){

      this.listData[i].buy_qty++ 
  
}


decrease(i:any){
    this.listData[i].buy_qty-- 
}

deleteItem(i:any){
  this.listData.splice([i],1)
  // this.calTotal(this.cartItem)
}

  addOrder(){
    
    this.service.addOrder(this.listData).subscribe(res=>{
    //  console.log(this.listData)
    })
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    let dialog = this.dialogRef.open(PopupAddProductComponent, dialogConfig);
  
    dialog.afterClosed().subscribe(res=>{
      this.service.product().subscribe(res=>{
        this.data2=res.data
        // console.log(this.data2)
        this.dataSource2 = new MatTableDataSource(this.data2);
      })
    })
  }

  onSelectcategory(category:any){
    let data = this.data5.filter((res: { cateID: any; })=>{
      return res.cateID.toString().match(category.toString())
    })
    this.dataOutOfStock = new MatTableDataSource(data);
  }

  onSelect(qty:any){
    let data = this.data5.filter((res: { Qty: any;  })=>{
      return res.Qty < 5
    })
    this.dataOutOfStock = new MatTableDataSource(data);
  }
  
  
  // show_ProductName(data:any){
  //   this.service.showProductName(data).subscribe(res=>{
  //     console.log(res)
  //   })
  // }
test(id:any){
  let product=(<HTMLInputElement>document.getElementById(id)).value
  console.log(product)
}
  
  get p(){
    return this.orderForm.controls;
}


}
