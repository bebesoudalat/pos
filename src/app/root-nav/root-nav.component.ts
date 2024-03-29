import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RestAPIService } from '../shared/rest-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css']
})
export class RootNavComponent {

  employeeName:any;

  user= JSON.parse(localStorage.getItem("user") || "[]").status
  user_info=JSON.parse(localStorage.getItem("user") || "[]")
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private service: RestAPIService, private router : Router) {}

  ngOnInit(): void {
    this.service.employee().subscribe(res=>{
      this.employeeName = res.data
      console.log(res)
    })
     console.log(this.user_info.data[0].emName)
  }

  logout(){
    localStorage.clear()
    this.user_info=null
    this.user=null
    this.router.navigate(['login'])
  }
}
