import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatFormField } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestAPIService } from '../shared/rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:any = FormGroup;

  constructor(public formBuilder: FormBuilder, private service: RestAPIService) { }

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
    })
    }
  }

