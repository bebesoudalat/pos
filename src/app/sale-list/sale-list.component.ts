import {  Component, OnInit,ViewChild } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css']
})
export class SaleListComponent implements OnInit {
  displayedColumns: string[] = ['no','date', 'emName', 'total_price', 'action'];

  data:any=[]
  dataSource:any
  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator

  constructor(private service : RestAPIService, private router : Router) { }

  ngOnInit(): void {
    this.service.showSaleData().subscribe(res=>{
      this.data=res.data 
      console.log(this.data.length)
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator=this.paginator
    })
  }

  show_saleDetail(saleID:any){
    this.router.navigate(['sale-detail',saleID])
  }

}
