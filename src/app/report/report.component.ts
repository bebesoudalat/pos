import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
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
  displayedSale: string[] = ['date', 'emName', 'total_price', 'action'];
  displayedOrder: string[] = ['orderID','supName', 'proName', 'action'];
  displayedImport: string[] = ['importID','orderID','supName','emName','date','total_price','action'];
  

  dataSource2:any;
  data2:any;

  dataSource3:any;
  data3:any;

  dataSource4:any;
  data4:any;

  dataSource5:any;
  data5:any;

  constructor(private service: RestAPIService, private router : Router) { }

  ngOnInit(): void {
    this.service.product().subscribe(res=>{
      this.data2=res.data
      // console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
    })

    this.service.showSaleData().subscribe(res=>{
      this.data3=res.data 
      // console.log(this.data)
      this.dataSource3 = new MatTableDataSource(this.data3);
    })

    this.service.showorder().subscribe(res=>{
      this.data4=res.data
      console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })

    this.service.showimport().subscribe(res =>{
      this.data5 = res.data;
      console.log(this.data5)
      this.dataSource5 = new MatTableDataSource(this.data5);
    })
  }

  show_saleDetail(saleID:any){
    this.router.navigate(['sale-detail',saleID])
  }

  showDetail(orderID:any){
    this.router.navigate(['order-detail',orderID])
    console.log(orderID)
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
