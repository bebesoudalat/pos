import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['proID','image', 'proName', 'qty', 'action'];

  dataSource2:any;
  data2:any;

  constructor() { }

  ngOnInit(): void {
  }

}
