import { Component, OnInit,ViewChild } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import * as moment from 'moment';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'buy_price', 'action'];
  displayOrder: string[] = ['no','orderID','supName', 'proName', 'action'];

  dataSource2:any;
  data2:any;
  orderID:any;
  user_info=JSON.parse(localStorage.getItem("user") || "[]")
  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator

  onSearchProduct = new Subject<any>();

  constructor(private service:RestAPIService,private router : Router) {
    this.onSearchProduct.pipe(switchMap((searchProduct)=>
    this.service.search_order(searchProduct))).subscribe((value)=> 
    console.log('test',value));
   }

  ngOnInit(): void {

 

    this.service.showorder().subscribe(res=>{
      this.data2=res.data
      console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
      this.dataSource2.paginator = this.paginator
    })
  }

  showDetail(orderID:any){
    this.router.navigate(['import-detail',orderID])
    console.log(orderID)
  }

  select_date(event:any){
    // console.log(event.target.value)
    let data = this.data2.filter((res: { buy_date: any; })=>{
      return moment(res.buy_date).format("yyyy-MM-DD").toString().match(event.target.value.toString())
    })
    this.dataSource2 = new MatTableDataSource(data);
    console.log(this.dataSource2._data._value)
  }

  
  search_Product(searchProduct:any){
    console.log()
    this.onSearchProduct.next(searchProduct);
    this.service.search_order(searchProduct).subscribe(res=>{
      console.log(res)
      this.data2=res.data;
      // console.log(this.data4)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })
  }


}
