import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';
import { SaleComponent } from '../sale/sale.component';

@Component({
  selector: 'app-confirm-sale-popup',
  templateUrl: './confirm-sale-popup.component.html',
  styleUrls: ['./confirm-sale-popup.component.css']
})
export class ConfirmSalePopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SaleComponent>) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }

}
