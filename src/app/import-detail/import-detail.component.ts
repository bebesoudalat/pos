import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';

@Component({
  selector: 'app-import-detail',
  templateUrl: './import-detail.component.html',
  styleUrls: ['./import-detail.component.css']
})
export class ImportDetailComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['proID','image', 'proName', 'qty', 'action'];

  dataSource2:any;
  data2:any;

  constructor(private service: RestAPIService) { }

  ngOnInit(): void {
  }

}
