import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['proID','image', 'proName', 'qty', 'action'];

  dataSource2:any;
  data2:any;

  constructor(private service: RestAPIService) { }

  ngOnInit(): void {
  }

}
