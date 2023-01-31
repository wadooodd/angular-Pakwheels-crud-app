import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './components/cart/product.model';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  url = 'http://localhost:3000/products/';

  constructor(private http :HttpClient) { }

  addProduct(prod:Product){
    return this.http.post(this.url, prod);
  }

  getProductList() {
    return this.http.get<Product[]>(this.url);
  }

  deleteProduct(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  updateProduct(emp:Product){
    return this.http.put(`${this.url}/${emp._id}`, emp);
  }
}
