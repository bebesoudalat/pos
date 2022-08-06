import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-report',
  templateUrl: './print-report.component.html',
  styleUrls: ['./print-report.component.css']
})
export class PrintReportComponent implements OnInit {
  displayProduct: string[] = ['proID','proName', 'cateName','unitName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['proID','image', 'supName', 'proName', 'buy_price'];
  displayedSale: string[] = ['date', 'emName', 'total_price', 'action'];
  displayedOrder: string[] = ['orderID','supName', 'proName', 'action'];
  displayedImport: string[] = ['importID','orderID','supName','emName','date','action'];
  displaySale: string[] = ['emID','productID', 'sale_qty', 'price'];
  displayImport: string[] = ['proID','image', 'proName', 'import_qty', 'buy_price'];

  dataSource2:any;
  data2:any;

  dataSource3:any;
  data3:any;

  dataSource4:any;
  data4:any;

  dataSource5:any;
  data5:any;

  saleDetail:any
  data6:any
  dataSource6:any

  data7:any
  dataSource7:any

  
  data8:any
  dataSource8:any


  constructor(private service : RestAPIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.product().subscribe(res=>{
      this.data2=res.data
      console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })

    this.service.showSaleData().subscribe(res=>{
      this.data3=res.data 
      // console.log(this.data3)
      this.dataSource3 = new MatTableDataSource(this.data3);
    })

    this.service.showorder().subscribe(res=>{
      this.data4=res.data
      // console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })

    this.service.showimport().subscribe(res =>{
      this.data5 = res.data;
      console.log(this.data5)
      this.dataSource5 = new MatTableDataSource(this.data5);
    })

    this.service.showsaledetail2().subscribe(res=>{
      console.log(res.data)
      this.saleDetail = res.data
      this.data6 = res.data
      this.dataSource6 = new MatTableDataSource(this.data6);
    })

    this.service.showOrderdetail2().subscribe(res=>{
      console.log(res.data)
      this.saleDetail = res.data
      this.data7 = res.data
      this.dataSource7 = new MatTableDataSource(this.data7);
    })

    this.service.showimportdetail2().subscribe(res=>{
      console.log(res.data)
      this.saleDetail = res.data
      this.data8 = res.data
      this.dataSource8 = new MatTableDataSource(this.data8);
    })
  }

}
