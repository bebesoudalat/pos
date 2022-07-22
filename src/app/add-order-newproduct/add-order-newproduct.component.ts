import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-order-newproduct',
  templateUrl: './add-order-newproduct.component.html',
  styleUrls: ['./add-order-newproduct.component.css']
})
export class AddOrderNewproductComponent implements OnInit {

  newProductForm:any = FormGroup;

  data4: any=[];
  dataSource4:any;

  submitted= false;



  constructor(private dialogRef: MatDialogRef<ManageDataComponent>,public formBuilder: FormBuilder, public service : RestAPIService) { }

  ngOnInit(): void {
    this.newProductForm = this.formBuilder.group ({
      'supID': ['', [Validators.required]],
      'productID': ['', [Validators.required]],
      'productName': ['', [Validators.required]],
      'buy_qty': ['', [Validators.required]]
    })

    this.service.supplier().subscribe(res=>{
      this.data4=res.data
      // console.log(this.data4)
      // this.dataSource4 = new MatTableDataSource(this.data4);
    })
  }
  onClose(){
    this.dialogRef.close();
  }
  get p(){
    return this.newProductForm.controls;
}
}
