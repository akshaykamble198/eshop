import { Injectable } from '@angular/core';
import { BehaviorSubject, map ,take} from 'rxjs';
import { Product } from 'src/app/core/model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  selectedItemSubject=new BehaviorSubject<Product[]>([]);
  selectItem= this.selectedItemSubject.asObservable();


  constructor() { 
    this.getProductfromLocalstorage();
  }



  emitSelectedProduct(products:Product[]){
    this.selectedItemSubject.next(products)
  }




  addItemToCart(i:Product){
    this.selectItem.pipe(take(1),map((products)=>{
      products.push(i);
      let prodArr=JSON.stringify(products);
      localStorage.setItem("products",prodArr);
    })).subscribe();
  }

  

  getProductfromLocalstorage(){
    let productArr:any;
    productArr = localStorage.getItem("products");
    if(productArr){
    productArr = JSON.parse(productArr);
    this.emitSelectedProduct(productArr);
    }
  }
}
