import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  displayOrder: string[] = ['proID','image', 'proName', 'qty', 'action'];
  dataSource2:any;
  data2:any;

  constructor(private service: RestAPIService) { }

  ngOnInit(): void {
  }

}
