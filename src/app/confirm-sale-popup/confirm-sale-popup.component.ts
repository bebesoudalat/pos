import { Component, OnInit, inject, Inject} from '@angular/core';

import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';
import { SaleComponent } from '../sale/sale.component';
import { RestAPIService } from '../shared/rest-api.service';
@Component({
  selector: 'app-confirm-sale-popup',
  templateUrl: './confirm-sale-popup.component.html',
  styleUrls: ['./confirm-sale-popup.component.css']
})
export class ConfirmSalePopupComponent implements OnInit {

 receive:any = []
 TotalPrice:any
 price:any
 money:any = 0
 changed: any


  constructor(public dialogRef: MatDialogRef<SaleComponent>, @Inject(MAT_DIALOG_DATA) public data:any, private service : RestAPIService) {
    this.receive=data
   }

  ngOnInit(): void {
  console.log(this.receive)

  }

  onClose(){
    this.dialogRef.close();
  }

  cal(sellprice:any,qty:any){
    return sellprice*qty
    }
  
   
  calTotal(data:any){
    // console.log(data.length)
    this.TotalPrice=0
    let total = 0
    for (let i = 0; i < data.length; i++) {
        total= data[i].sell_price*data[i].Qty;
        this.TotalPrice = total+this.TotalPrice
    }
    // console.log(this.TotalPrice)
    return this.TotalPrice
    }

    getValue(){
      return this.money
      console.log(this.money)
    }

    change(money:any){
     this.money=money-this.TotalPrice
      if (this.money<0) {
        return this.money=0
      } else {
        return this.money
      }
      
    }

    addSale(){
      let emID=JSON.parse(localStorage.getItem("user") || "[]")[0].emID
      let total_price = this.TotalPrice;
      this.service.sale(this.receive,emID,total_price).subscribe(res=>{
        console.log(this.receive)
        this.dialogRef.afterClosed().subscribe(res =>{
          this.receive.reset();
        })
      })
    }
    input(event:any){
      console.log(event.target.value)
      this.change(event.target.value)
    }
}
