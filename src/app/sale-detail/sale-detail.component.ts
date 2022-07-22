import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {


  displaySale: string[] = ['emID','productID', 'sale_qty', 'price'];
  dataSource2:any =[];

  saleDetail:any;
  data:any =[];

  constructor(private service:RestAPIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.showsaledetail(this.activatedRoute.snapshot.params['saleID']).subscribe(res=>{
      console.log(res.data)
      this.saleDetail = res.data
      this.data = res.data
      this.dataSource2 = new MatTableDataSource(this.data);
    })
  }

}
