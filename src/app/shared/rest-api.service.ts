import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
    url = 'http://localhost:3000'
  constructor(private http:HttpClient) { }
  //show data
  product(){
    return this.http.get<any>(this.url+'/product')
  }
  
  unit(){
    return this.http.get<any>(this.url+'/unit')
  }
  supplier(){
    return this.http.get<any>(this.url+'/supplier')
  }

  employee(){
    return this.http.get<any>(this.url+'/employee')
  }
  register(data:any){
    return this.http.post<any>(this.url+'/add_employee',data)
  }
  

  //CRUD Category
  category(){
    return this.http.get<any>(this.url+'/category')
  }

  addproduct(data:any){
    return this.http.post<any>(this.url+'/add_product',data)
  }
  addcategory(data:any){
    return this.http.post<any>(this.url+'/add_category',data)
  }
  

  addsupplier(data:any){
    return this.http.post<any>(this.url+'/add_supplier',data)
  }

  addunit (data:any){
    return this.http.post<any>(this.url+'/add_unit',data)
  }

  editproduct(data:any){
    return this.http.put<any>(this.url+'/edit_product',data)
  }

  editunit(data:any){
    return this.http.put<any>(this.url+'/unit_update',data)
  }

  editcategory(data:any){
    return this.http.put<any>(this.url+'/category_update',data)
  }

  editsupplier(data:any){
    return this.http.put<any>(this.url+'/supplier_update',data)
  }

  deleteCategory(cateID:any){
    return this.http.delete<any>(this.url+'/delete_category/'+cateID)
  }

  delunit(unitID:any){
    return this.http.delete(this.url+'/unit_delete/'+unitID)
  }
  deleteProduct(productID:any){
    return this.http.delete(this.url+'/delete_product/'+productID)
  }
  delSupplier(supID:any){
    return this.http.delete(this.url+'/delete_supplier/'+supID)
  }

  search_Product(keyword:any){
    return this.http.get<any>(this.url+'/product_search?keyword='+keyword)
  }
  
  sale(data:any){
    return this.http.post<any>(this.url+'/sale_and_saleDetail',data)
  }
  login(data:any){
    return this.http.post<any>(this.url+'/login',data)
  }

  

  //CRUD unit
  
// show village, district, province
village(){
  return this.http.get<any>(this.url+'/village')
}

district(){
  return this.http.get<any>(this.url+'/district')
}

province(){
  return this.http.get<any>(this.url+'/province')
}

}
