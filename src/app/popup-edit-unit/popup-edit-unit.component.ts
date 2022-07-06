import { Component, OnInit,ViewChild,ChangeDetectorRef, Inject } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ManageDataComponent } from '../manage-data/manage-data.component';

@Component({
  selector: 'app-popup-edit-unit',
  templateUrl: './popup-edit-unit.component.html',
  styleUrls: ['./popup-edit-unit.component.css']
})
export class PopupEditUnitComponent implements OnInit {

  unitForm:any = FormBuilder
  data3:any
  dataSource3:any

  constructor(private service: RestAPIService, public formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data_sent:any, public dialogRef: MatDialogRef<ManageDataComponent>) { }

  ngOnInit(): void {
    this.unitForm = this.formBuilder.group({
      'unitID': [this.data_sent.unitID,[Validators.required]],
      'unitName': [this.data_sent.unitName,[Validators.required]]
    })
  }

  btn_editUnit(){
    console.log(this.unitForm.value)
    this.service.editunit(this.unitForm.value).subscribe(res=>{
      console.log(res)
      
      this.unitForm = this.formBuilder.group({
        'unitID': ['',[Validators.required]],
        'unitName': ['',[Validators.required]]
        })
    })
    }

    onClose(){
      this.dialogRef.close();
    }
}
