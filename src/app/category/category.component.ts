import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['cateID', 'cateName','action'];
  dataSource:any;
  data:any=[];

  constructor(private service:RestAPIService) { 
  
  }

  ngOnInit(): void {
    this.service.category().subscribe(res=>{
      this.data=res.data 
      console.log(this.data)
      this.dataSource = new MatTableDataSource(this.data);
      
    })
   
    
  }

}
