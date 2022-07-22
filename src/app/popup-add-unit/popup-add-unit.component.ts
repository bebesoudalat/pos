import { Component, OnInit,ViewChild,ChangeDetectorRef } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';

@Component({
  selector: 'app-popup-add-unit',
  templateUrl: './popup-add-unit.component.html',
  styleUrls: ['./popup-add-unit.component.css']
})
export class PopupAddUnitComponent implements OnInit {

  unitForm:any = FormBuilder

  data3:any
  dataSource3:any

  constructor(private service: RestAPIService, public formBuilder: FormBuilder, public dialogRef : MatDialogRef<ManageDataComponent>) { }

  ngOnInit(): void {
    this.unitForm = this.formBuilder.group({
      'unitID': ['',[Validators.required]],
      'unitName': ['',[Validators.required]]
    })
  }

  // addUnit(){
    

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

  //       this.service.addunit(this.unitForm.value).subscribe(res=>{
  //         console.log(res)
  //         this.service.unit().subscribe(res=>{
  //           this.data3=res.data
  //           console.log(this.data3)
  //           this.dataSource3 = new MatTableDataSource(this.data3);
        

  //           this.unitForm = this.formBuilder.group({
  //             'unitID' : ['',[Validators.required]],
  //             'unitName': ['', [Validators.required]]
  //           })
            
  //         })
  //       })
  //     }
  //   })  
  //   }

    addUnit(){
      this.service.addunit(this.unitForm.value).subscribe(res=>{
        console.log(res)
        this.service.unit().subscribe(res=>{
          this.data3=res.data
          console.log(this.data3)
          this.dataSource3 = new MatTableDataSource(this.data3);
        })
      })
    }

    onClose(){
      this.dialogRef.close();
    }
  }

