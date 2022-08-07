import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from "sweetalert2";

@Component({
  selector: 'app-import-detail',
  templateUrl: './import-detail.component.html',
  styleUrls: ['./import-detail.component.css']
})
export class ImportDetailComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['proID','image', 'proName','import_qty', 'buy_price'];
  displayImport: string[] = ['proID','image', 'proName', 'import_qty', 'buy_price'];

  dataSource2:any;
  data2:any;

  // orderDetail:any;
  order:any

  dataSource1:any

  dataAll:any

  saleDetail:any
  data8:any
  dataImport:any

  importdetail:any
  importdetail_qty:any
  data9:any

 test=this.activatedRoute.snapshot.params['orderID']
  constructor(private service: RestAPIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.showOrderdetail(this.activatedRoute.snapshot.params['orderID']).subscribe(res=>{
      this.dataAll=res.data
      let index = res.data.length-1
      for (let i = 0; i <= index; i++) {
        this.dataAll[i].import_qty=res.data[i].buy_qty
      }
      console.log(this.dataAll)
      this.data2 = res.data
      this.dataSource1 = new MatTableDataSource(this.data2);
    })

    this.service.showimportdetail2().subscribe(res=>{
      console.log(res.data)
      this.saleDetail = res.data
      this.data8 = res.data
      this.dataImport = new MatTableDataSource(this.data8);
    })

    this.show_qty()

    
  }

  show_qty(){
    this.service.showImport_Qty(this.test).subscribe(res=>{
      console.log(res.data)
      this.importdetail = res.data
      this.data9 = res.data
      this.importdetail_qty = new MatTableDataSource(this.data9);
    })
  }

  importDetail(){
    
    // if (this.dataAll[0].status = 1) {
    //   Swal.fire({
    //     icon: 'success',
    //   text: 'ທ່ານໄດ້ນຳສິນຄ້າເຂົ້າສຳເລັດ',
    //   })
      let emID=JSON.parse(localStorage.getItem("user") || "[]").data[0].emID
      this.service.import(this.dataAll,emID).subscribe(res => {
      console.log(this.dataAll)
      this.show_qty()
    })
    this.dataAll[0].status = 1

    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     text: 'ເກີດມີຂໍ້ຜິດພາດ',
    //     })
    // }
  }



  status(stt:any){
    let status = stt
  switch (stt) {
    case 0:
      status = 'ຍັງບໍ່ໄດ້ນຳເຂົ້າ';
      
      break;
      case 1:
      status = 'ນຳສິນຄ້າເຂົ້າແລ້ວ';
      
      break;
  
    default:
      break;
  }
  return status;
  }

  

  setValue(event:any,element:any,index:any){
    //  console.log(element)

    // console.log(this.dataAll)
    
    // console.log(event.target.value,element,index)
    this.dataAll[index].import_qty= parseInt(event.target.value)
    console.log(this.dataAll)
  }
}
