import { Component, OnInit,ViewChild,ChangeDetectorRef } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';
@Component({
  selector: 'app-popup-add-product',
  templateUrl: './popup-add-product.component.html',
  styleUrls: ['./popup-add-product.component.css']
})
export class PopupAddProductComponent implements OnInit {

  data:any=[];
  data3: any=[];
  productForm:any = FormGroup;

  add:boolean = true
  edit:boolean = false

  dataSource1:any;

  dataSource2:any;
  data2:any=[];

  dataSource3:any;

  data4:any =[];
  dataSource4:any;

  prev_image : any = document.getElementById('img-edit')
  img:boolean = false
  submitted = false

  


  constructor(private service:RestAPIService, public formBuilder: FormBuilder, private cd: ChangeDetectorRef, public dialogRef: MatDialogRef<ManageDataComponent>) { }

  ngOnInit(): void {
    this.service.category().subscribe(res=>{
      this.data=res.data 
      // console.log(this.data)
      this.dataSource1 = new MatTableDataSource(this.data);
    })
    this.service.product().subscribe(res=>{
      this.data2=res.data
      // console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })
    this.service.unit().subscribe(res=>{
      this.data3=res.data
      console.log(this.data3)
      this.dataSource3 = new MatTableDataSource(this.data3);
    })
    this.service.supplier().subscribe(res=>{
      this.data4=res.data
      // console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })
    this.productForm = this.formBuilder.group({
      'productName': ['', [Validators.required]],
      'cateID': ['', [Validators.required]],
      'unitID': ['', [Validators.required]],
      'supID': ['1', [Validators.required]],
      'Qty': ['', [Validators.required]],
      'buy_price': ['', [Validators.required]],
      'sell_price': ['', [Validators.required]],
      'image': ['', [Validators.required]]
  })
  }

  get p(){
    return this.productForm.controls;
}

  onFIleSelect(event:any, field:any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      if (!file.type.startsWith('image')) {
        this.productForm.get(field).setErrors({
          required: true
        });
        this.cd.markForCheck();
      } else {
        // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
        this.productForm.patchValue({
          [field]: file
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      }
    }}

    addProduct(){
      const data= new FormData();
      Object.entries(this.productForm.value).forEach(([key,value]:any[])=>{
        data.set(key,value)
      })
      console.log(data)
      this.service.addproduct(data).subscribe (res=>{
        console.log(res)
      })
    }

    onClose(){
      this.dialogRef.close();
    }

}
