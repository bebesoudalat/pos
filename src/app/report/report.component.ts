import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
// import { Workbook } from 'exceljs';
// import * as Excel from "exceljs";
// import * as Excel from 'exceljs/dist/exceljs.min.js'
import * as moment from 'moment';
import * as fs from 'file-saver';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['proID','image', 'proName', 'qty', 'action'];

  dataSource2:any;
  data2:any;

  constructor(private service: RestAPIService) { }

  ngOnInit(): void {
    this.service.product().subscribe(res=>{
      this.data2=res.data
      // console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })
  }
//   exportExcel() {

//     let workbook = new Excel.Workbook();
//     let worksheet = workbook.addWorksheet('ProductData');
//     worksheet.columns = [
//       { header: 'no', key: 'productID',                      width: 18, style: { font: { name: 'phetsarath OT', size:12} }  },
//       { header: 'image', key: 'image',                        width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
//       { header: 'productName', key: 'productName',                              width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
//       { header: 'Qty', key: 'Qty',              width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
//       { header: 'buy_price', key: 'buy_price',          width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
//       { header: 'sell_price', key: 'sell_price',                           width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      
//     ];

// this.data2.forEach((e:any) => {
//   // if(moment(e.date_was_covid).format("DD/MM/yyyy").toString()=='Invalid date'){
//   //   e.date_was_covid=''
//   //  }else{
//   //   e.date_was_covid=moment(e.date_was_covid).format("DD/MM/yyyy").toString()
//   //  }
//   worksheet.addRow({
//     Appointment_date: moment(e.Appointment_date).format("DD/MM/yyyy").toString(),
//     productID: e.productID,
//     image:e.image,
//     productName: e.productName ,
//     Qty:e.Qty,
//     buy_price:e.buy_price,
//     sell_price:e.sell_price
//     // dob: moment(e.dob).format("DD/MM/yyyy").toString()  ,
//     // tb_form_create_date: moment(e.tb_form_create_date).format("DD/MM/yyyy").toString(),
//     // tb_form_modify_date: moment(e.tb_form_modify_date).format("DD/MM/yyyy").toString(),

//    },"n");

// });
//     workbook.xlsx.writeBuffer().then((data) => {
//       let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
//       fs.saveAs(blob, 'ProductData.xlsx');
//     })

//   }



}
