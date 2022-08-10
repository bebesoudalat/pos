import { Component, OnInit ,ViewChild,ChangeDetectorRef} from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { PopupAddProductComponent } from '../popup-add-product/popup-add-product.component';
import { PopupEditProductComponent } from '../popup-edit-product/popup-edit-product.component';
import { PopupAddCategoryComponent } from '../popup-add-category/popup-add-category.component';
import { PopupEditCategoryComponent } from '../popup-edit-category/popup-edit-category.component';
import { PopupAddUnitComponent } from '../popup-add-unit/popup-add-unit.component';
import { PopupEditUnitComponent } from '../popup-edit-unit/popup-edit-unit.component';
import { PopupAddSupplierComponent } from '../popup-add-supplier/popup-add-supplier.component';
import { PopupEditSupplierComponent } from '../popup-edit-supplier/popup-edit-supplier.component';
import { MatPaginator } from '@angular/material/paginator';
import { ConfirmSalePopupComponent } from '../confirm-sale-popup/confirm-sale-popup.component';
import { PopupAddEmployeeComponent } from '../popup-add-employee/popup-add-employee.component';
import { PopupEditEmployeeComponent } from '../popup-edit-employee/popup-edit-employee.component';





@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {
  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator
  displayedColumns: string[] = ['cateID', 'cateName','action'];
  displayProduct: string[] = ['proID','product_code','image', 'proName', 'qty', 'sell_price', 'buy_price', 'action'];
  displayUnit: string[] = ['unitID', 'unitName','action'];
  displaySupplier: string[] = ['supID','supName','village','district','province','tel','action'];
  displayEmployee:string[] = ['emID','emName','surname','tel','action']

  dataProduct: any;

  dataSource1:any;
  dataSource2:any;
  dataSource3:any;
  dataSource4:any;
  dataSource5:any;
  data:any=[];
  data2:any=[];
  data3: any=[];
  data4: any=[];
  data5: any=[];
  productForm:any = FormGroup;
  supplierForm:any = FormGroup;
  unitForm: any = FormGroup;
  categoryForm:any = FormGroup;
  employeeForm:any = FormGroup;
  submitted= false;

  

  prev_image : any = document.getElementById('img-edit')


  
 
  

  villageList:any=[]    //set Data for Filter
  districtList:any=[]  //set Data for filter
  provinceList:any=[] //set Data for Filter

  province_data:any=[]  //Represent Data Filtered
  district_data:any=[] //Represent Data Filtered
  village_data:any=[] //Represent Data Filtered

  supplier_district='' //give default value for Show Selected option default
  supplier_village='' //give default value for Show Selected option default

  img:boolean = false

  add:boolean = true
  edit:boolean = false

  add_unit:boolean = true
  edit_unit:boolean = false

  add_category:boolean = true
  edit_category:boolean = false

  add_sup:boolean = true
  edit_sup:boolean = false

  user_info=JSON.parse(localStorage.getItem("user") || "[]")
  
  constructor(private service:RestAPIService, public formBuilder: FormBuilder, private dialogRef: MatDialog,private cd: ChangeDetectorRef) { 
    
    if (this.user_info.data[0].user !="bebe") {
      this.displayedColumns= ['cateID', 'cateName'];
      this.displayProduct = ['proID','product_code','image', 'proName', 'qty', 'sell_price', 'buy_price'];
      this.displayUnit = ['unitID', 'unitName'];
      this.displaySupplier = ['supID','supName','village','district','province','tel'];
      this.displayEmployee = ['emID','emName','surname','tel']
        }
  }

  ngOnInit(): void {
    this.service.category().subscribe(res=>{
      this.data=res.data 
      // console.log(this.data)
      this.dataSource1 = new MatTableDataSource(this.data);
    })
    this.service.product().subscribe(res=>{
      this.data2=res.data
      console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
      this.dataSource2.paginator=this.paginator
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
    this.service.employee().subscribe(res=>{
      this.data5=res.data
      this.dataSource5 = new MatTableDataSource(this.data5);
    })
    this.productForm = this.formBuilder.group({
      'product_code': ['', [Validators.required]],
      'productName': ['', [Validators.required]],
      'cateID': ['', [Validators.required]],
      'unitID': ['', [Validators.required]],
      'supID': ['1', [Validators.required]],
      'qty': ['', [Validators.required]],
      'buy_price': ['', [Validators.required]],
      'sell_price': ['', [Validators.required]],
      'image': ['', [Validators.required]]
  })
  this.supplierForm = this.formBuilder.group({
    'supID': ['', [Validators.required]],
    'supName': ['', [Validators.required]],
    'id_village': ['', [Validators.required]],
    'id_district': ['', [Validators.required]],
    'id_province': ['', [Validators.required]],
    'tel': ['', [Validators.required]]
})

this.unitForm = this.formBuilder.group({
  'unitID': ['',[Validators.required]],
  'unitName': ['',[Validators.required]]
})

this.categoryForm = this.formBuilder.group({
  'cateID' : ['',[Validators.required]],
  'cateName': ['', [Validators.required]]
})

this.employeeForm = this.formBuilder.group({
  'emName': ['', [Validators.required]],
  'surname': ['', [Validators.required]],
  'gender': ['', [Validators.required]],
  'date_of_birth': ['', [Validators.required]],
  'address': ['', [Validators.required]],
  'tel': ['', [Validators.required]],
  'ID_card': ['', [Validators.required]],
  'user': ['', [Validators.required]],
  'password': ['', [Validators.required]]
})


  
  // this.unitForm = this.formBuilder.group({
  //   unitName: [null,Validators.required]
  // })
  this.service.province().subscribe(res=>{
    this.provinceList=res.data
    this.province_data=res.data
  })
  this.service.district().subscribe(res=>{
    this.districtList=res.data
    this.district_data=res.data
  })
  this.service.village().subscribe(res=>{
    this.villageList=res.data
    this.village_data=res.data
  })
}

get p(){
    return this.productForm.controls;
}
get c(){
  return this.categoryForm.controls;
}
get s(){
  return this.supplierForm.controls;
}
get u(){
  return this.unitForm.controls;
}

// addProduct(){
//   this.submitted = true
// }


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

edit_product_dialog(data:any){
  let dialog = this.dialogRef.open(PopupEditProductComponent,{data});
  this.img=true
      this.edit = true
      this.add = false
    console.log(data.image)
    this.prev_image=data.image
    this.productForm = this.formBuilder.group({
      'productID': [data.productID, [Validators.required]],
      'productName': [data.productName, [Validators.required]],
      'cateID': [data.cateID, [Validators.required]],
      'unitID': [data.unitID, [Validators.required]],
      'supID': [data.supID, [Validators.required]],
      'Qty': [data.Qty, [Validators.required]],
      'buyPrice': [data.buy_price, [Validators.required]],
      'sellPrice': [data.sell_price, [Validators.required]],
      'image': ['', []]
    })
    dialog.afterClosed().subscribe(res=>{
      this.service.product().subscribe(res=>{
        this.data2=res.data
        console.log(this.data2)
        this.dataSource2 = new MatTableDataSource(this.data2);
      })
    }
  )
}



addCategory_dialog(){
  const dialogConfig = new MatDialogConfig;
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus= true;
  let dialog = this.dialogRef.open(PopupAddCategoryComponent,dialogConfig)

  dialog.afterClosed().subscribe(res=>{
    this.service.category().subscribe(res=>{
      this.data=res.data 
      // console.log(this.data)
      this.dataSource1 = new MatTableDataSource(this.data);
    })
  }
    )
}

editCategory_dialog(data:any){
  
  let dialog = this.dialogRef.open(PopupEditCategoryComponent,{data});
  this.categoryForm = this.formBuilder.group({
    'cateID' : [data.cateID,[Validators.required]],
    'cateName': [data.cateName, [Validators.required]]
  })
  dialog.afterClosed().subscribe(res=>{
    this.service.category().subscribe(res=>{
      this.data=res.data 
      // console.log(this.data)
      this.dataSource1 = new MatTableDataSource(this.data);
    })
  })
}


addUnit_dialog(){
  const dialogConfig = new MatDialogConfig;
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus= true;
  let dialog = this.dialogRef.open(PopupAddUnitComponent, dialogConfig);

  dialog.afterClosed().subscribe(res=>{
    this.service.unit().subscribe(res=>{
      this.data3=res.data
      console.log(this.data3)
      this.dataSource3 = new MatTableDataSource(this.data3);
    })
  })
}

editUnit_dialog(data:any){
  let dialog = this.dialogRef.open(PopupEditUnitComponent,{data});

  this.unitForm = this.formBuilder.group({
    'unitID': [data.unitID,[Validators.required]],
    'unitName': [data.unitName,[Validators.required]]
  })

  dialog.afterClosed().subscribe(res=>{
    this.service.unit().subscribe(res=>{
      this.data3=res.data
      console.log(this.data3)
      this.dataSource3 = new MatTableDataSource(this.data3);
    })
  })
 
}

edit_employee_dialog(data:any){
  
  let dialog = this.dialogRef.open(PopupEditEmployeeComponent,{data});
  this.employeeForm = this.formBuilder.group({
    'emName': ['', [Validators.required]],
    'surname': ['', [Validators.required]],
    'gender': ['', [Validators.required]],
    'date_of_birth': ['', [Validators.required]],
    'address': ['', [Validators.required]],
    'tel': ['', [Validators.required]],
    'ID_card': ['', [Validators.required]],
    'user': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  })
  dialog.afterClosed().subscribe(res=>{
    this.service.employee().subscribe(res=>{
      this.data5=res.data
      this.dataSource5 = new MatTableDataSource(this.data5);
    })
  })
}

addSupplier_dialog(){
  const dialogConfig = new MatDialogConfig;
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus= true;
  let dialog = this.dialogRef.open(PopupAddSupplierComponent, dialogConfig);

  dialog.afterClosed().subscribe(res=>{
    this.service.supplier().subscribe(res=>{
      this.data4=res.data
      // console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })
  })
}

addEmployee_dialog(){
  const dialogConfig = new MatDialogConfig;
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus= true;
  let dialog = this.dialogRef.open(PopupAddEmployeeComponent, dialogConfig);

  dialog.afterClosed().subscribe(res=>{
    this.service.showEmployee().subscribe(res=>{
      this.data5=res.data
      // console.log(this.data4)
      this.dataSource5 = new MatTableDataSource(this.data5);
    })
  })
}

editSupplier_dialog(data:any){
  let dialog = this.dialogRef.open(PopupEditSupplierComponent,{data})
  this.supplierForm = this.formBuilder.group({
    'supID': [data.supID, [Validators.required]],
    'supName': [data.supName, [Validators.required]],
    'id_village': [data.id_village, [Validators.required]],
    'id_district': [data.id_district, [Validators.required]],
    'id_province': [data.id_province, [Validators.required]],
    'tel': [data.tel, [Validators.required]]
})
dialog.afterClosed().subscribe(res=>{
  this.service.supplier().subscribe(res=>{
    this.data4=res.data
    // console.log(this.data4)
    this.dataSource4 = new MatTableDataSource(this.data4);
  })
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



delCategory(id:any){
  Swal.fire({
    title: 'ກະລຸນາຢືນຢັນ',
    text: 'ທ່ານຕ້ອງການລຶບແທ້ ຫຼື ບໍ່ ?',
    imageWidth: 150,
    imageHeight: 150,

    //imageUrl:'assets/assets/images/newlogobig.jpeg',

    showCancelButton: true,
    confirmButtonColor: '#89ADEB',
    cancelButtonColor: '#d3d3d3',
    confirmButtonText: 'ຕົກລົງ'

  }).then((result) => {
    if (result.isConfirmed) {
      console.log(id)
      this.service.deleteCategory(id).subscribe(res=>{
        console.log(res)
        this.service.category().subscribe(res=>{
          this.data=res.data 
          console.log(this.data)
          this.dataSource1 = new MatTableDataSource(this.data);
          
        })
      })
    }
  })
}
delEmployee(id:any){
  Swal.fire({
    title: 'ກະລຸນາຢືນຢັນ',
    text: 'ທ່ານຕ້ອງການລຶບແທ້ ຫຼື ບໍ່ ?',
    imageWidth: 150,
    imageHeight: 150,

    //imageUrl:'assets/assets/images/newlogobig.jpeg',

    showCancelButton: true,
    confirmButtonColor: '#89ADEB',
    cancelButtonColor: '#d3d3d3',
    confirmButtonText: 'ຕົກລົງ'

  }).then((result) => {
    if (result.isConfirmed) {
      console.log(id)
      this.service.delemployee(id).subscribe(res=>{
        console.log(res)
        this.service.showEmployee().subscribe(res=>{
          this.data5=res.data 
          console.log(this.data5)
          this.dataSource5 = new MatTableDataSource(this.data5);
          
        })
      })
    }
  })
}

del_product(id:any){
  Swal.fire({
    title: 'ກະລຸນາຢືນຢັນ',
    text: 'ທ່ານຕ້ອງການລຶບແທ້ ຫຼື ບໍ່ ?',
    imageWidth: 150,
    imageHeight: 150,

    //imageUrl:'assets/assets/images/newlogobig.jpeg',

    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ຕົກລົງ'

  }).then((result) => {
    if (result.isConfirmed) {
      console.log(id)
      this.service.deleteProduct(id).subscribe(res=>{
        console.log(res)
        this.service.product().subscribe(res=>{
          this.data2=res.data
          // console.log(this.data2)
          this.dataSource2 = new MatTableDataSource(this.data2);
        })
      })
    }
  })
}

del_Unit(id:any){
  Swal.fire({
    title: 'ກະລຸນາຢືນຢັນ',
    text: 'ທ່ານຕ້ອງການລຶບແທ້ ຫຼື ບໍ່ ?',
    imageWidth: 150,
    imageHeight: 150,

    //imageUrl:'assets/assets/images/newlogobig.jpeg',

    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ຕົກລົງ'

  }).then((result) => {
    if (result.isConfirmed) {
      console.log(id)
      this.service.delunit(id).subscribe(res=>{
        console.log(res)
        this.service.unit().subscribe(res=>{
          this.data3=res.data
          console.log(this.data3)
          this.dataSource3 = new MatTableDataSource(this.data3);
        })
      })
    }
  })
}

del_supplier(id:any){
  Swal.fire({
    title: 'ກະລຸນາຢືນຢັນ',
    text: 'ທ່ານຕ້ອງການລຶບແທ້ ຫຼື ບໍ່ ?',
    imageWidth: 150,
    imageHeight: 150,

    //imageUrl:'assets/assets/images/newlogobig.jpeg',

    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'ຕົກລົງ'

  }).then((result) => {
    if (result.isConfirmed) {
      console.log(id)
      this.service.delSupplier(id).subscribe(res=>{
        console.log(res)
        this.service.supplier().subscribe(res=>{
          this.data4=res.data
          console.log(this.data4)
          this.dataSource4 = new MatTableDataSource(this.data4);
        })
      })
    }
  })
}


// delCategory(id:any){
//   this.service.deleteCategory(id).subscribe(res=>{
//     console.log(res)
//     this.service.category().subscribe(res=>{
//       this.data=res.data 
//       console.log(this.data)
//       this.dataSource1 = new MatTableDataSource(this.data);
      
//     })
//   })
// }



// del_Unit(id:any){
//   console.log(id)
//   this.service.delunit(id).subscribe(res=>{
//     console.log(res)
//     this.service.unit().subscribe(res=>{
//       this.data3=res.data
//       console.log(this.data3)
//       this.dataSource3 = new MatTableDataSource(this.data3);
//     })
//   })
// }

onSelectprovince(province:any){
  let data=this.districtList.filter((res: { id_province: string; })=>{
    return res.id_province.toLowerCase().match(province.target.value.toLocaleLowerCase())
  })
  this.district_data=data
  this.village_data=null
  this.supplier_district=''
  this.supplier_village=''
}

onSelectdistrict(district:any){
  let data=this.villageList.filter((res: { id_district: string; })=>{
    return res.id_district.toLowerCase().match(district.target.value.toLocaleLowerCase())
  })
  this.village_data=data
  this.supplier_village=''
}

addSupplier(){
  this.service.addsupplier(this.supplierForm.value).subscribe(res=>{
    console.log(res)
    this.service.supplier().subscribe(res=>{
      this.data4=res.data
      console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })
  })
}

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

editProduct(data:any){
  this.img=true
  this.edit = true
  this.add = false
console.log(data.image)
this.prev_image=data.image
// this.productForm = this.formBuilder.group({
//   'productID': [data.productID, [Validators.required]],
//   'proName': [data.productName, [Validators.required]],
//   'cateName': [data.cateID, [Validators.required]],
//   'unitName': [data.unitID, [Validators.required]],
//   'Qty': [data.Qty, [Validators.required]],
//   'buyPrice': [data.buy_price, [Validators.required]],
//   'sellPrice': [data.sell_price, [Validators.required]],
//   'image': ['', []]
// })
}

// onUpdate funtion
btn_editProduct(){
  this.img= false
  this.edit = false
  this.add = true
  this.service.editproduct(this.productForm.value).subscribe(res=>{
    console.log(res)
    this.service.product().subscribe(res=>{
      this.data2=res.data
      console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })
  })
}

//show data in form unit
editUnit(data:any){
this.add_unit= false
this.edit_unit = true
console.log(data)
this.unitForm = this.formBuilder.group({
  'unitID': [data.unitID,[Validators.required]],
  'unitName': [data.unitName,[Validators.required]]
  })
}

//onUpdate funtion
btn_editUnit(){
this.add_unit= true
this.edit_unit = false
console.log(this.unitForm.value)
this.service.editunit(this.unitForm.value).subscribe(res=>{
  console.log(res)
  this.service.unit().subscribe(res=>{
    this.data3=res.data
    console.log(this.data3)
    this.dataSource3 = new MatTableDataSource(this.data3);
  })
  this.unitForm = this.formBuilder.group({
    'unitID': ['',[Validators.required]],
    'unitName': ['',[Validators.required]]
    })
})
}

//show data in form category
edit_Category(data:any){
  this.add_category = false
  this.edit_category = true
  this.categoryForm = this.formBuilder.group({
    'cateID': [data.cateID,[Validators.required]],
    'cateName': [data.cateName,[Validators.required]]
  })
}

// onUpdate function
btn_editCategory(){
  this.add_category = true
  this.edit_category = false
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

//show data in form supplier
edit_supplier(data:any){
  console.log(data)
  this.add_sup = false
  this.edit_sup = true
  this.supplierForm = this.formBuilder.group({
    'supID': [data.supID, [Validators.required]],
    'supName': [data.supName, [Validators.required]],
    'id_village': [data.id_village, [Validators.required]],
    'id_district': [data.id_district, [Validators.required]],
    'id_province': [data.id_province, [Validators.required]],
    'tel': [data.tel, [Validators.required]]
  })
}

btn_editSup(){
  this.add_sup = true
  this.edit_sup = false
  this.service.editsupplier(this.supplierForm.value).subscribe(res=>{
    console.log(res)
    this.service.supplier().subscribe(res=>{
      this.data4=res.data
      console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })
    this.supplierForm = this.formBuilder.group({
      'supID': ['', [Validators.required]],
      'supName': ['', [Validators.required]],
      'id_village': ['', [Validators.required]],
      'id_district': ['', [Validators.required]],
      'id_province': ['', [Validators.required]],
      'tel': ['', [Validators.required]]
  })
  })
}


}
