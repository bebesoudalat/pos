import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ManageDataComponent } from '../manage-data/manage-data.component';
@Component({
  selector: 'app-popup-add-employee',
  templateUrl: './popup-add-employee.component.html',
  styleUrls: ['./popup-add-employee.component.css']
})
export class PopupAddEmployeeComponent implements OnInit {

  employeeForm:any = FormGroup;
  submitted= false;
  data2:any=[]

  constructor(private service : RestAPIService, public formBuilder: FormBuilder, private cd: ChangeDetectorRef, public dialogRef: MatDialogRef<ManageDataComponent> ) { }

  ngOnInit(): void {
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
  }

  get e(){
    return this.employeeForm.controls;
  }
  onClose(){
    this.dialogRef.close();
  }
  addEmployee(){
    this.service.register(this.employeeForm.value).subscribe(res=>{
      console.log(res)
      })
    }

}
