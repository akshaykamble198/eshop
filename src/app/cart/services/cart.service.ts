import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from 'src/app/core/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedItemSubject= new BehaviorSubject<Product[]>([]);
  selectItem= this.selectedItemSubject.asObservable();
  constructor() { 
    this.getProductfromLocalstorage();
  }

  emitSelectedProduct(product:Product[]){
    this.selectedItemSubject.next(product)
  }

  addItemToCart(product:Product){
    this.selectItem.pipe(map(products=>{
      products.push(product);
      let prodArr=JSON.stringify(products);
      localStorage.setItem("products",prodArr);
    })).subscribe();
  }

  getProductfromLocalstorage(){
    let productArr:any;
    productArr = localStorage.getItem("products");
    productArr = JSON.parse(productArr);
    this.emitSelectedProduct(productArr);
    
  }
}
