import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  displayedColumns: string[] = ['unitID', 'unitName','action'];
  dataSource:any;
  data:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
