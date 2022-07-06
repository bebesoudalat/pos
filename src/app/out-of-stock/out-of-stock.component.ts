import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-out-of-stock',
  templateUrl: './out-of-stock.component.html',
  styleUrls: ['./out-of-stock.component.css']
})
export class OutOfStockComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'action'];

  dataSource2:any;
  data2:any;
  constructor(private service:RestAPIService) { }

  ngOnInit(): void {
    this.service.product().subscribe(res=>{
      this.data2=res.data
      // console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })
  }

}
