import { Component, OnInit,ViewChild } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
displayProduct: string[] = ['proID','image', 'proName', 'qty', 'buy_price', 'action'];
displayOrder: string[] = ['no', 'proName','orderID','supName', 'action'];

dataSource2:any;
data2:any;
orderID:any;
@ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator

constructor(public service : RestAPIService, private router:Router) { }

  ngOnInit(): void {
    this.service.showorder().subscribe(res=>{
      this.data2=res.data
      console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
      this.dataSource2.paginator = this.paginator
    })
  }

  showDetail(orderID:any){
    this.router.navigate(['orderlistDetail',orderID])
    console.log(orderID)
  }
}
