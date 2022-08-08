import { Component, OnInit,ViewChild,ChangeDetectorRef, Inject } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';

@Component({
  selector: 'app-popup-edit-employee',
  templateUrl: './popup-edit-employee.component.html',
  styleUrls: ['./popup-edit-employee.component.css']
})
export class PopupEditEmployeeComponent implements OnInit {

  employeeForm:any=[]

  data5:any
  dataSource5:any

  constructor(private service:RestAPIService, public formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data_sent:any, public dialogRef: MatDialogRef<ManageDataComponent>) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      'emID': [this.data_sent.emID, [Validators.required]],
      'emName': [this.data_sent.emName, [Validators.required]],
      'surname': [this.data_sent.surname, [Validators.required]],
      'gender': [this.data_sent.gender, [Validators.required]],
      'date_of_birth': [this.data_sent.date_of_birth, [Validators.required]],
      'address': [this.data_sent.address, [Validators.required]],
      'tel': [this.data_sent.tel, [Validators.required]],
      'ID_card': [this.data_sent.ID_card, [Validators.required]],
      'user': [this.data_sent.user, [Validators.required]],
      'password': [this.data_sent.password, [Validators.required]]
    })

    this.service.employee().subscribe(res=>{
      this.data5=res.data
      this.dataSource5 = new MatTableDataSource(this.data5);
    })
  }

  btn_editEmployee(){
    this.service.editEmployee(this.employeeForm.value).subscribe(res=>{
      console.log(res)
      this.service.employee().subscribe(res=>{
        this.data5=res.data
        this.dataSource5 = new MatTableDataSource(this.data5);
      })
      this.employeeForm = this.formBuilder.group({
        'emID': ['', [Validators.required]],
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
    })
  }

  onClose(){
    this.dialogRef.close();
  }
}
