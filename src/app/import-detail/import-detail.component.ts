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
  displayOrder: string[] = ['proID','image', 'proName', 'buy_price', 'action'];

  dataSource2:any;
  data2:any;

  orderDetail:any;
  order:any

  dataSource1:any

  constructor(private service: RestAPIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.showOrderdetail(this.activatedRoute.snapshot.params['orderID']).subscribe(res=>{
      console.log(res.data)
      this.orderDetail = res.data
      this.data2 = res.data
      this.dataSource1 = new MatTableDataSource(this.data2);
    })

  }

  importDetail(){
    
    if (this.orderDetail[0].status = 1) {
      Swal.fire({
        icon: 'success',
      text: 'ທ່ານໄດ້ນຳສິນຄ້າເຂົ້າສຳເລັດ',
      })
      let emID=JSON.parse(localStorage.getItem("user") || "[]").data[0].emName
      this.service.import(this.orderDetail,emID).subscribe(res => {
      console.log(res)
      this.orderDetail[0].status = 1
    })
    } else {
      Swal.fire({
        icon: 'error',
        text: 'ເກີດມີຂໍ້ຜິດພາດ',
        })
    }
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

  


}
