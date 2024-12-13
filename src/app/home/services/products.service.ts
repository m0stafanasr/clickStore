import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { Urls } from '../../urls/urls';
import { ProductsResponse } from '../models/products';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
urls = Urls
  constructor(private http:HttpClient,    private spinner: NgxSpinnerService) { }

  getAllProducts(){
   let url= environment.apiUrl+this.urls.getProducts
    return this.http.get<ProductsResponse[]>(url)
  }

  getAllCategories(){
    this.spinner.show()
    let url =environment.apiUrl+this.urls.getAllCategories
    return this.http.get<string[]>(url)
  }
  getByCategory(category){
    this.spinner.show()
    let url =environment.apiUrl+this.urls.getByCategory+'/'+category
    return this.http.get<ProductsResponse[]>(url)
  }
  getSpecificProduct(id){
    this.spinner.show()
    let url = environment.apiUrl + this.urls.getProducts + `/${id}`
    return this.http.get<ProductsResponse>(url);
  }

  addNewProduct(product:ProductsResponse){
    this.spinner.show();
    let url = environment.apiUrl + this.urls.getProducts;
    return this.http.post<ProductsResponse>(url, product);
  }

  deleteProduct(id:number){
    this.spinner.show();
    let url = environment.apiUrl + this.urls.getProducts+ `/${id}`;
    return this.http.delete<ProductsResponse>(url);
  }
}
