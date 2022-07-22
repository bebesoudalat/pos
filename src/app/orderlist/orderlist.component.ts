import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private service: RestAPIService) { }

  ngOnInit(): void {
    
  }

}
