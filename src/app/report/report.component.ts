import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Workbook } from 'exceljs';
import * as moment from 'moment';
import * as fs from 'file-saver';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayProduct: string[] = ['proID','proName', 'cateName','unitName', 'qty', 'sell_price', 'buy_price'];
  displayedSale: string[] = ['emID','productID', 'sale_qty', 'price'];
  displayedOrder: string[] = ['orderID','supName', 'proName', 'action'];
  displayedImport: string[] = ['importID','orderID','supName','emName','date','action'];
  displayProduct_report: string[] = ['proID','proName', 'cateName','unitName', 'qty', 'sell_price', 'buy_price'];
  displaySale_report: string[] = ['emID','productID', 'sale_qty', 'price'];
  displayOrder_report: string[] = ['proID','image', 'supName', 'proName', 'buy_price'];
  displayImport_report: string[] = ['proID','image', 'proName', 'import_qty', 'buy_price'];
  

  dataSource2:any;
  data2:any;

  dataSource3:any;
  data3:any;

  dataSource4:any;
  data4:any;

  dataSource5:any;
  data5:any;

  dataSource_productReport:any;
  productReport:any;

  dataSale_report:any
  data6:any
  saleDetail:any

  dataOrder_report:any
  data7:any

  dataImport_report:any
  data8:any

  date : Date = new Date();
  

  constructor(private service: RestAPIService, private router : Router) { }

  ngOnInit(): void {
    this.service.product().subscribe(res=>{
      this.data2=res.data
      this.productReport=res.data
      console.log(this.data2)
      this.dataSource2 = new MatTableDataSource(this.data2);
      this.dataSource_productReport = new MatTableDataSource(this.productReport);
    })

    this.service.showSaleData().subscribe(res=>{
      this.data3=res.data 
      // console.log(this.data3)
      this.dataSource3 = new MatTableDataSource(this.data3);
    })

    this.service.showorder().subscribe(res=>{
      this.data4=res.data
      // console.log(this.data4)
      this.dataSource4 = new MatTableDataSource(this.data4);
    })

    this.service.showimport().subscribe(res =>{
      this.data5 = res.data;
      console.log(this.data5)
      this.dataSource5 = new MatTableDataSource(this.data5);
    })
    this.service.showsaledetail2().subscribe(res=>{
      console.log(res.data)
      this.saleDetail = res.data
      this.data3 = res.data
      this.data6 = res.data
      this.dataSale_report = new MatTableDataSource(this.data6);
      this.dataSource3 = new MatTableDataSource(this.data3);
    })

    this.service.showOrderdetail2().subscribe(res=>{
      console.log(res.data)
      this.data7 = res.data
      this.dataOrder_report = new MatTableDataSource(this.data7);
    })

    this.service.showimportdetail2().subscribe(res=>{
      console.log(res.data)
      this.saleDetail = res.data
      this.data8 = res.data
      this.dataImport_report = new MatTableDataSource(this.data8);
    })
  }

  show_saleDetail(saleID:any){
    this.router.navigate(['sale-detail',saleID])
  }

  showDetail(orderID:any){
    this.router.navigate(['order-detail',orderID])
    console.log(orderID)
  }

  showImportDetail(importID:any){
    this.router.navigate(['importDetail',importID])
    console.log(importID)
  }
  showdate(){
    this.service.showDate().subscribe(res =>
      console.log())
  }


  exportExcel() {

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('ProductData');
    worksheet.columns = [
      { header: 'no', key: 'productID',                      width: 18, style: { font: { name: 'phetsarath OT', size:12} }  },
      { header: 'image', key: 'image',                        width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      { header: 'productName', key: 'productName',                              width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      { header: 'Qty', key: 'Qty',              width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      { header: 'buy_price', key: 'buy_price',          width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      { header: 'sell_price', key: 'sell_price',                           width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      
    ];

this.data2.forEach((e:any) => {
  // if(moment(e.date_was_covid).format("DD/MM/yyyy").toString()=='Invalid date'){
  //   e.date_was_covid=''
  //  }else{
  //   e.date_was_covid=moment(e.date_was_covid).format("DD/MM/yyyy").toString()
  //  }
  worksheet.addRow({
    Appointment_date: moment(e.Appointment_date).format("DD/MM/yyyy").toString(),
    productID: e.productID,
    image:e.image,
    productName: e.productName ,
    Qty:e.Qty,
    buy_price:e.buy_price,
    sell_price:e.sell_price
    // dob: moment(e.dob).format("DD/MM/yyyy").toString()  ,
    // tb_form_create_date: moment(e.tb_form_create_date).format("DD/MM/yyyy").toString(),
    // tb_form_modify_date: moment(e.tb_form_modify_date).format("DD/MM/yyyy").toString(),

   },"n");

});
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'ProductData.xlsx');
    })

  }

  exportSale() {

    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Saledata');
    worksheet.columns = [
      { header: 'no', key: 'saleID',                      width: 18, style: { font: { name: 'phetsarath OT', size:12} }  },
      { header: 'productName', key: 'product',                        width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      { header: 'sale_qty', key: 'sale_qty',              width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      { header: 'sell_price', key: 'sell_price',          width: 18, style: { font: { name: 'phetsarath OT', size:12} } },
      
    ];

this.data3.forEach((e:any) => {
  // if(moment(e.date_was_covid).format("DD/MM/yyyy").toString()=='Invalid date'){
  //   e.date_was_covid=''
  //  }else{
  //   e.date_was_covid=moment(e.date_was_covid).format("DD/MM/yyyy").toString()
  //  }
  worksheet.addRow({
    Appointment_date: moment(e.Appointment_date).format("DD/MM/yyyy").toString(),
    saleID: e.saleID,
    productName: e.productName,
    sale_qty:e.sale_qty,
    sell_price:e.sell_price
    // dob: moment(e.dob).format("DD/MM/yyyy").toString()  ,
    // tb_form_create_date: moment(e.tb_form_create_date).format("DD/MM/yyyy").toString(),
    // tb_form_modify_date: moment(e.tb_form_modify_date).format("DD/MM/yyyy").toString(),

   },"n");

});
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'SaleData.xlsx');
    })

  }



}
