import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material/dialog';
import { AddOrderNewproductComponent } from '../add-order-newproduct/add-order-newproduct.component';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupAddProductComponent } from '../popup-add-product/popup-add-product.component';
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { Subject, switchMap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayProduct: string[] = ['proID','image','productCode', 'proName', 'qty','buy_qty', 'action'];
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

  user_info=JSON.parse(localStorage.getItem("user") || "[]")

  numberww:any=0
  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator

  onSearchProduct = new Subject<any>();

  constructor( private dialogRef: MatDialog, public service: RestAPIService, public formBuilder: FormBuilder, private router : Router) {
    this.onSearchProduct.pipe(switchMap((searchProduct)=>
    this.service.search_Product(searchProduct))).subscribe((value)=> 
    console.log('test',value));
  }

  ngOnInit(): void {
    if (this.user_info.data[0].user !="bebe") {
      this.router.navigate([''])
    }

    this.service.supplier().subscribe(res=>{
      this.data4=res.data
      // console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })

    this.service.product().subscribe(res=>{
      this.data2=res.data
      console.log(res.data)
      this.dataSource2 = new MatTableDataSource(this.data2);
      this.dataSource2.paginator = this.paginator
      
      // this.data5=res.data
      // console.log(this.data1)
      // this.dataOutOfStock = new MatTableDataSource(this.data5);
      // console.log(this.data5)
    })


    // this.service.showOrderList().subscribe(res=>{
    //   this.data1=res.data
    //   // console.log(this.data1)
    //   this.dataOrderlist = new MatTableDataSource(this.data1);
    //   console.log(this.data1)
    // })

    // this.service.OutOfStock().subscribe(res=>{
    //   this.data5=res.data
    //   // console.log(this.data1)
    //   this.dataOutOfStock = new MatTableDataSource(this.data5);
    //   console.log(this.data5)
    // })

   

    this.dataOrderlist = new MatTableDataSource(this.listData);



    
  }
  showOrderlist(){
    this.router.navigate(['orderlist'])
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
    let qty_buy=(<HTMLInputElement>document.getElementById('2'+data.productID)).value
    // let buy_price=(<HTMLInputElement>document.getElementById('1'+data.productID)).value
    // let sell_price =(<HTMLInputElement>document.getElementById('3'+data.productID)).value

    console.log(qty_buy)
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
                product_code:data.product_code,
                productName:data.productName,
                supID:data.supID,
                supName:data.supName,
                unitName:data.unitName,
                Qty:data.Qty,
                buy_qty:qty_buy,
                buy_price: data.buy_price,
                sell_price : data.sell_price
              })
    }
    console.log(this.listData)
    Swal.fire({
      text: 'ທ່ານໄດ້ເພີ່ມລາຍການຈັດຊື້ສຳເລັດແລ້ວ',
      icon: 'success',
      confirmButtonColor: '#d6e4f9',
      cancelButtonColor: '#d6e4f9',
      confirmButtonText: 'ຕົກລົງ'
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
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-secondary',
          cancelButton: 'btn btn-success'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        text: "ທ່ານຕ້ອງການຈັດຊື້ລາຍການທັງໝົດນີ້ບໍ ?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'ຕົກລົງ',
        cancelButtonText: 'ຍົກເລີກ',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // swalWithBootstrapButtons.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
          this.service.addOrder(this.listData).subscribe(res=>{
          
          })
          this.listData=[]
          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          
          this.listData
        }
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
    let data = this.data2.filter((res: { cateID: any; })=>{
      return res.cateID.toString().match(category.toString())
    })
    this.dataSource2 = new MatTableDataSource(data);
  }

  onSelectSupplier(supplier:any){
    console.log(supplier.target.value)
    let data = this.data2.filter((res: { supID: any; })=>{
      return res.supID.toString().match(supplier.target.value.toString())
    })
    this.dataSource2 = new MatTableDataSource(data);
  }


  onSelect(qty:any){
    let data = this.data2.filter((res: { Qty: any;  })=>{
      return res.Qty <= 3
    })
    this.dataSource2 = new MatTableDataSource(data);
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

search_Product(searchProduct:any){
  console.log()
  this.onSearchProduct.next(searchProduct);
  this.service.search_Product(searchProduct).subscribe(res=>{
    // console.log(res)
    this.data2=res.data
      console.log(res.data)
      this.dataSource2 = new MatTableDataSource(this.data2);
  })
}


}
