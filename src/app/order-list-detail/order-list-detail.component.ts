import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from "sweetalert2";

@Component({
  selector: 'app-order-list-detail',
  templateUrl: './order-list-detail.component.html',
  styleUrls: ['./order-list-detail.component.css']
})
export class OrderListDetailComponent implements OnInit {
  isplayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['no', 'product_code','image', 'proName', 'buy_price'];
  displayOrder_report: string[] = ['no','product_code','image', 'proName', 'buy_price'];

  dataSource2:any;
  data2:any;

  orderDetail:any;
  order:any

  dataSource1:any

  data_report:any
  dataSource_report:any

  date : Date = new Date();

  constructor(private service: RestAPIService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.service.showOrderdetail(this.activatedRoute.snapshot.params['orderID']).subscribe(res=>{
      console.log(res.data)
      this.orderDetail = res.data
      this.data2 = res.data
      this.data_report = res.data
      this.dataSource1 = new MatTableDataSource(this.data2);
      this.dataSource_report = new MatTableDataSource(this.data_report);
    })
  }

  
}
