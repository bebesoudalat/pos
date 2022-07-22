import { Component, OnInit,ViewChild,ChangeDetectorRef } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';

@Component({
  selector: 'app-popup-add-category',
  templateUrl: './popup-add-category.component.html',
  styleUrls: ['./popup-add-category.component.css']
})
export class PopupAddCategoryComponent implements OnInit {
  
  categoryForm:any = FormGroup;
  data:any=[];
  dataSource1:any;

  constructor(private service:RestAPIService, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<ManageDataComponent>) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      'cateID' : ['',[Validators.required]],
      'cateName': ['', [Validators.required]]
    })
  }

  // addCategory(){
  //   Swal.fire({
  //     title: 'ຂໍ້ຄວາມ',
  //     text: 'ເພີ່ມປະເພດສິນຄ້າສຳເລັດ',
  //     imageWidth: 50,
  //     imageHeight: 50,
  
  //     imageUrl:'src/assets/img/check-mark.png',
      
  
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     confirmButtonText: 'ຕົກລົງ'
  
  //   }).then((result) => {
  //     if (result.isConfirmed) {

  //       this.service.addcategory(this.categoryForm.value).subscribe(res=>{
  //         console.log(res)
  //         this.service.category().subscribe(res=>{
  //           this.data=res.data 
  //           console.log(this.data)
  //           this.dataSource1 = new MatTableDataSource(this.data);

  //           this.categoryForm = this.formBuilder.group({
  //             'cateID' : ['',[Validators.required]],
  //             'cateName': ['', [Validators.required]]
  //           })
            
  //         })
  //       })
  //     }
  //   })  
  //     }

      addCategory(){
        this.service.addcategory(this.categoryForm.value).subscribe(res=>{
          console.log(res)
          this.service.category().subscribe(res=>{
            this.data=res.data 
            console.log(this.data)
            this.dataSource1 = new MatTableDataSource(this.data);

      })
    })
  }
      onClose(){
        this.dialogRef.close();
      }
    }

