import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { RestAPIService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :any = FormGroup;

  constructor(private service : RestAPIService, public formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem("user") || "[]").status==1) {
      this.router.navigate([''])
    }
    this.loginForm = this.formBuilder.group({
      'user' : ['',[Validators.required]],
      'password': ['', [Validators.required]]
    })
  }

  login(){
    this.service.login(this.loginForm.value).subscribe(res=>{
      console.log(res)
      if (res.status == 1) {
        localStorage.setItem("user",JSON.stringify(res))
        this.router.navigate([''])
        console.log(localStorage)
      } else {
        localStorage.clear()
      }
    })
  }
}
