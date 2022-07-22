import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'buy_price', 'action'];
  displayOrder: string[] = ['orderID','supName', 'proName', 'action'];

  dataSource2:any;
  data2:any;
  orderID:any;

  constructor(public service : RestAPIService, private router:Router) { }

  ngOnInit(): void {
    this.service.showorder().subscribe(res=>{
      this.data2=res.data
      console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })
  }

  showDetail(orderID:any){
    this.router.navigate(['import-detail',orderID])
    console.log(orderID)
  }


}
