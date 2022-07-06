import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  qty: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'mickeymouse', qty: 5, price: 100000},
  {name: 'mickeymouse', qty: 5, price: 100000},
  {name: 'mickeymouse', qty: 5, price: 100000},
  {name: 'mickeymouse', qty: 5, price: 100000},
  {name: 'mickeymouse', qty: 5, price: 100000},
];

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['name','qty', 'price']
  Source = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
