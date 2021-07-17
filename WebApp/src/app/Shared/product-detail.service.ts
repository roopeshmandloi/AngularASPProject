import { Injectable } from '@angular/core';
import { ProductDetail } from './product-detail.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }
  formData:ProductDetail =new ProductDetail();
  readonly baseURL = 'http://localhost:58836/api/Products';
    
  postProductDetail() {
    console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }

  // putProductDetail() {
  //   return this.http.put(`${this.baseURL}/${this.formData.Product_Id}`, this.formData);
  // }

  // deleteProductDetail(id: number) {
  //   return this.http.delete(`${this.baseURL}/${id}`);
  // }

  // refreshList() {
  //   this.http.get(this.baseURL)
  //     .toPromise()
  //     .then(res =>this.list = res as ProductDetail[]);
  // }

}
