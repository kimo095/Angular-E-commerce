import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get(environment.baseApi + 'products') 
  }
  getAllcategories(){
    return this.http.get(environment.baseApi + 'products/categories') 
  }
  getProductsByCategory(keyword:string){
    return this.http.get(environment.baseApi + 'products/category/' + keyword) 
  }
  getProductById(id:any){
    return this.http.get(environment.baseApi + 'products/' + id) 
  }
}
