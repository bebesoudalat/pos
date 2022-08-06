import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestAPIService } from '../shared/rest-api.service';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:any = FormGroup;

  constructor(public formBuilder: FormBuilder, private service: RestAPIService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
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

  register_employee(){
    this.service.register(this.registerForm.value).subscribe(res=>{
      console.log(res)
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-secondary',
          cancelButton: 'btn btn-success'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        text: "ທ່ານໄດ້ເພີ່ມລາຍການຈັດຊື້ສຳເລັດ",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'ເບິ່ງລາຍການທີ່ຈັດຊື້',
        cancelButtonText: 'ຕົກລົງ',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          // swalWithBootstrapButtons.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
          this.router.navigate(['login'])
          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          
          this.registerForm=[]
        }
      })
  
        this.registerForm=[]
    })
    }
  }

