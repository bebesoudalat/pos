import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestAPIService } from '../shared/rest-api.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-import-detail',
  templateUrl: './import-detail.component.html',
  styleUrls: ['./import-detail.component.css']
})
export class ImportDetailComponent implements OnInit {
  displayProduct: string[] = ['proID','image', 'proName', 'qty', 'sell_price', 'buy_price'];
  displayOrder: string[] = ['proID','product_code','image', 'proName','import_qty', 'buy_price', 'sell_price'];
  displayImport: string[] = ['proID','product_code','image', 'proName', 'import_qty', 'buy_price'];

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
  constructor(private service: RestAPIService, private activatedRoute: ActivatedRoute, private router : Router) { }

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
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-secondary',
        cancelButton: 'btn btn-success'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      text: "ສິນຄ້າຄົບຖ້ວນແລ້ວບໍ່ ?",
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'ຕົກລົງ',
      cancelButtonText: 'ຍົກເລີກ',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // swalWithBootstrapButtons.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        let emID=JSON.parse(localStorage.getItem("user") || "[]").data[0].emID
      this.service.import(this.dataAll,emID).subscribe(res => {
      console.log(this.dataAll)
      this.show_qty()
    })
    this.dataAll[0].status = 1
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        
        this.dataAll[0].status = 0
      }
    })
    
    // if (this.dataAll[0].status = 1) {
    //   Swal.fire({
    //     icon: 'success',
    //   text: 'ທ່ານໄດ້ນຳສິນຄ້າເຂົ້າສຳເລັດ',
    //   })
      

    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     text: 'ເກີດມີຂໍ້ຜິດພາດ',
    //     })
    // }
  }


// importDetail(){
//   console.log(this.dataAll)
// }
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
     console.log(event.target.id)
     console.log(event.target.value)
     console.log(element)
if (parseInt(event.target.value) >= 0 && parseInt(event.target.value) <= element  ) {
  this.dataAll[index].import_qty= parseInt(event.target.value)
  console.log(this.dataAll)
} else {
  alert('error')
}
     
    // console.log(this.dataAll)
    
    // console.log(event.target.value,element,index)

  }

  setValue_buyPrice(event:any,element:any,index:any){
    console.log(event.target.id)

   // console.log(this.dataAll)
   
   // console.log(event.target.value,element,index)
   this.dataAll[index].price = parseInt(event.target.value)
   console.log(this.dataAll)
 }
 setValue_sellPrice(event:any,element:any,index:any){
  console.log(event.target.id)

 // console.log(this.dataAll)
 
 // console.log(event.target.value,element,index)
 this.dataAll[index].sell_price = parseInt(event.target.value)
 console.log(this.dataAll)
}
}
