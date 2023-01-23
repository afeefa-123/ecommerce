import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  search = new BehaviorSubject("")

  constructor(private http:HttpClient) { }
  //view all product api
  viewAllProduct()
  {
    return this.http.get('http://localhost:3000/posts')
  }
  //view product
  viewProduct(productId:any){
    return this.http.get('http://localhost:3000/posts/'+productId)

  }
  //add new product api
  addProduct(productBody:any){
    return this.http.post('http://localhost:3000/posts/',productBody)
  }
// UPDATE PRODUCT
updateProduct(productId:any,productBody:any){
  return this.http.put('http://localhost:3000/posts/'+productId,productBody)
}
//delete product
deleteProduct(productId:any){
  return this.http.delete('http://localhost:3000/posts/'+productId)
}
}
