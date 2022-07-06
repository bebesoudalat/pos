import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';

@Component({
  selector: 'app-add-order-newproduct',
  templateUrl: './add-order-newproduct.component.html',
  styleUrls: ['./add-order-newproduct.component.css']
})
export class AddOrderNewproductComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ManageDataComponent>) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close();
  }
}
