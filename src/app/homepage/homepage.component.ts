import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestAPIService } from '../shared/rest-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  data2:any;

  constructor(private service: RestAPIService) { }

  ngOnInit(): void {
    this.service.product().subscribe(res=>{
      this.data2=res.data
      // console.log(this.data2)
    })
  }

}
