import { Component, OnInit,ViewChild,ChangeDetectorRef, Inject } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';
@Component({
  selector: 'app-popup-edit-product',
  templateUrl: './popup-edit-product.component.html',
  styleUrls: ['./popup-edit-product.component.css']
})
export class PopupEditProductComponent implements OnInit {

  data:any=[];
  data3: any=[];
  productForm:any = FormGroup;

  add:boolean = true
  edit:boolean = false

  dataSource1:any;

  dataSource2:any;
  data2:any=[];

  dataSource3:any;

  data4: any=[];
  dataSource4:any;

  prev_image : any = document.getElementById('img-edit')
  img:boolean = false


  constructor(private service:RestAPIService, public formBuilder: FormBuilder, private cd: ChangeDetectorRef,@Inject(MAT_DIALOG_DATA) public data_sent:any, public dialogRef: MatDialogRef<ManageDataComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      'productID': [this.data_sent.productID, [Validators.required]],
      'product_code': [this.data_sent.product_code, [Validators.required]],
      'productName': [this.data_sent.productName, [Validators.required]],
      'cateID': [this.data_sent.cateID, [Validators.required]],
      'unitID': [this.data_sent.unitID, [Validators.required]],
      'supID':[this.data_sent.supID,[Validators.required]],
      'qty': [this.data_sent.qty, [Validators.required]],
      'buy_price': [this.data_sent.buy_price, [Validators.required]],
      'sell_price': [this.data_sent.sell_price, [Validators.required]],
      'image': ['']
    })
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

  


    
    // onUpdate funtion
    btn_editProduct(){

      this.img= false
    this.edit = false
    this.add = true
    console.log(this.productForm.value['image'])
    // this.service.product().subscribe(res=>{
    //   this.data2=res.data
    //   console.log(this.data2)
    //   this.dataSource2 = new MatTableDataSource(this.data2);
    // })
  //   const data= new FormData();
  // Object.entries(this.productForm.value).forEach(([key,value]:any[])=>{
  //   data.set(key,value)
  // })
  // console.log(data)
  if (this.productForm.value['image']) {
    const data= new FormData();
  Object.entries(this.productForm.value).forEach(([key,value]:any[])=>{
    data.set(key,value)
  })
  this.service.editproduct(data).subscribe(res=>{
    console.log(res)
    this.service.product().subscribe(res=>{
      this.data2=res.data
      // console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })
  })


  } else {
    this.service.editproduct(this.productForm.value).subscribe(res=>{
      console.log(res)
      this.service.product().subscribe(res=>{
        this.data2=res.data
        // console.log(this.data2)
        this.dataSource2 = new MatTableDataSource(this.data2);
      })
    })
  }
  
  }


  onClose(){
    this.dialogRef.close();
  }
}
