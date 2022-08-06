import { Component, OnInit,ViewChild } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['date', 'emName', 'total_price', 'action'];
  dataSource:any;
  data:any=[];
  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator
  
  constructor(private service:RestAPIService, private router : Router) { 

  }

  ngOnInit(): void {
    // this.service.showSaleData().subscribe(res=>{
      
    // })
    // this.dataSource = new MatTableDataSource(this.data);
    // this.data= ELEMENT_DATA;
    // this.dataSource.paginator=this.paginator

    this.service.showSaleData().subscribe(res=>{
      this.data=res.data 
      // console.log(this.data)
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator=this.paginator
    })
  }

  show_saleDetail(saleID:any){
    this.router.navigate(['sale-detail',saleID])
  }

  
}
