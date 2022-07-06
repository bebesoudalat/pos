import { Component, OnInit,ViewChild,ChangeDetectorRef, Inject } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';

@Component({
  selector: 'app-popup-edit-category',
  templateUrl: './popup-edit-category.component.html',
  styleUrls: ['./popup-edit-category.component.css']
})
export class PopupEditCategoryComponent implements OnInit {

  categoryForm:any = FormGroup;
  data:any=[];
  dataSource1:any;


  constructor(private service:RestAPIService, public formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data_sent:any, public dialogRef: MatDialogRef<ManageDataComponent>) {  }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      'cateID' : [this.data_sent.cateID,[Validators.required]],
      'cateName': [this.data_sent.cateName, [Validators.required]]
    })

    this.service.category().subscribe(res=>{
      this.data=res.data 
      // console.log(this.data)
      this.dataSource1 = new MatTableDataSource(this.data);
    })
  }

  btn_editCategory(){
    this.service.editcategory(this.categoryForm.value).subscribe(res=>{
      console.log(res)
      this.service.category().subscribe(res=>{
        this.data=res.data 
        console.log(this.data)
        this.dataSource1 = new MatTableDataSource(this.data);
      })
      this.categoryForm = this.formBuilder.group({
        'cateID' : ['',[Validators.required]],
        'cateName': ['', [Validators.required]]
      })
    })
  }

  onClose(){
    this.dialogRef.close();
  }

}
