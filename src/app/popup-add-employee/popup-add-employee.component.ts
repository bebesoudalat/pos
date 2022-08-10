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
      if (res.status == 0) {
        Swal.fire({
          icon: 'error',
          title: 'user ນີ້ມີແລ້ວ',
          text: 'ກະລູນາໃຊ້ user ອື່ນ',
          })
      } else {
        Swal.fire({
          icon: 'success',
          // title: 'ເພີ່ມພະນັກງານສຳເລັດ',
          text: 'ເພີ່ມພະນັກງານສຳເລັດ',
          })
      }
      })
    }

    // submit_registration(){

    //   if (this.Registration.invalid) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Form is Invalid',
    //       text: 'Please input all Fill',
    //       })
    //   } else {
    //     const data= new FormData(); //Create Data Store by FormData()
    //     Object.entries(this.Registration.value).forEach(([key,value]:any[])=>{
    //     data.set(key,value)
    //   })
    //   console.log(data)
    //   this.service.giver_register(data).subscribe(response=>{
    //         console.log(response)
    //         if (response.status ==0 ) {
    //           this.email_exist=true
    //           Swal.fire({
    //             icon: 'error',
    //             title: 'Email is already exist',
    //             text: 'Try other email',
    //             })
    //         }else if (response.error == true) {
    //           Swal.fire({
    //             icon: 'error',
    //             title: 'Sonething went wrong',
    //             text: 'Please contact supporter',
    //             })
    //         }
    //         else {
    //           Swal.fire({
    //             icon: 'success',
    //             title: 'Sucessfully',
    //             text: 'Welcome new Member',
    //             }).then(()=>{
    //               this.service.giver_data().subscribe(response=>{
    //                 this.data=response.data
    //                 this.dataSource = new MatTableDataSource(this.data);
    //                 this.dataSource.paginator = this.paginator;
    //                 })
    //                 this.Registration = this.fb.group({
    //                   admin_id:[this.admin_info.data[0].admin_id,Validators.required],
    //                   giver_name:        [null,Validators.required],
    //                   giver_surname:     [null,Validators.required],
    //                   giver_gender:      [null,Validators.required],
    //                   // giver_password:    [null,Validators.compose([Validators.required,Validators.minLength(8)])],
    //                   // confirm_password: [null,Validators.compose([Validators.required])],
    //                   image:            [null,Validators.required],
    //                   giver_email:       [null,Validators.compose([Validators.required,Validators.email])],
    //                   giver_dob:         [null,Validators.required],
    //                   giver_village:     [null,Validators.required],
    //                   giver_district:    [null,Validators.required],
    //                   giver_province:    [null,Validators.required],
    //                   giver_workplace:   [null,Validators.required],
    //                   giver_phoneNumber: [null,Validators.compose([Validators.required,Validators.pattern("^[+][0-9]{10,15}$")])],
    //                 })
    //             })
    //         }

    //       })
    //   }

    // }


}
