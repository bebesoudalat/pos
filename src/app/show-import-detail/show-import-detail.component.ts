import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-import-detail',
  templateUrl: './show-import-detail.component.html',
  styleUrls: ['./show-import-detail.component.css']
})
export class ShowImportDetailComponent implements OnInit {
  displayImport: string[] = ['proID','image', 'proName', 'buy_price'];

  importDetail :any
  data1:any
  dataSource1:any

  constructor(private service : RestAPIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.showimportdetail(this.activatedRoute.snapshot.params['importID']).subscribe(res=>{
      console.log(res.data)
      this.importDetail = res.data
      this.data1 = res.data
      this.dataSource1 = new MatTableDataSource(this.data1);
    })
  }

}
