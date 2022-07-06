import { Component, OnInit ,ViewChild,ChangeDetectorRef} from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';

@Component({
  selector: 'app-popup-add-supplier',
  templateUrl: './popup-add-supplier.component.html',
  styleUrls: ['./popup-add-supplier.component.css']
})
export class PopupAddSupplierComponent implements OnInit {

  supplierForm:any = FormBuilder
  villageList:any=[]    //set Data for Filter
  districtList:any=[]  //set Data for filter
  provinceList:any=[] //set Data for Filter

  province_data:any=[]  //Represent Data Filtered
  district_data:any=[] //Represent Data Filtered
  village_data:any=[] //Represent Data Filtered

  supplier_district='' //give default value for Show Selected option default
  supplier_village='' //give default value for Show Selected option default

  submitted= false;

  data4:any = []
  dataSource4:any = []

  constructor(private service: RestAPIService, public formBuilder: FormBuilder, public dialogRef: MatDialogRef<ManageDataComponent>) { }

  ngOnInit(): void {
    this.supplierForm = this.formBuilder.group({
      'supID': ['', [Validators.required]],
      'supName': ['', [Validators.required]],
      'id_village': ['', [Validators.required]],
      'id_district': ['', [Validators.required]],
      'id_province': ['', [Validators.required]],
      'tel': ['', [Validators.required]]
  })

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

  get s(){
    return this.supplierForm.controls;
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
  
  onClose(){
    this.dialogRef.close();
  }

}
