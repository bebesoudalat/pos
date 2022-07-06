import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material/dialog';
import { AddOrderNewproductComponent } from '../add-order-newproduct/add-order-newproduct.component';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price', 'action'];
  displayOrder: string[] = ['proID','image', 'proName', 'qty', 'action'];

  dataSource2:any;
  data2:any;

  submitted = false;

  data4:any =[];
  dataSource4:any;
  
  orderForm:any = FormGroup;

  constructor( private dialogRef: MatDialog, public service: RestAPIService) {}

  ngOnInit(): void {
    this.service.supplier().subscribe(res=>{
      this.data4=res.data
      // console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })
  }
  add_newproduct(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    this.dialogRef.open(AddOrderNewproductComponent, dialogConfig)
  }

  get p(){
    return this.orderForm.controls;
}
}
