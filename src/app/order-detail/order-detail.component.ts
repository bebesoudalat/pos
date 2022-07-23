import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['proID','image', 'proName', 'buy_price'];

  dataSource2:any;
  data2:any;

  orderDetail:any;
  order:any

  dataSource1:any

  constructor(private service: RestAPIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.showOrderdetail(this.activatedRoute.snapshot.params['orderID']).subscribe(res=>{
      console.log(res.data)
      this.orderDetail = res.data
      this.data2 = res.data
      this.dataSource1 = new MatTableDataSource(this.data2);
    })


    
  }


}
