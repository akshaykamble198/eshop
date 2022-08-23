import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http/http.service';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 products:Product[]=[ ];

filteredArray:any=[];
  constructor( private httpservice:HttpService ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpservice.getData("products").subscribe(el=>{
      if(Array.isArray(el)){
      this.products=el;
      this.filteredArray=this.products;
      }
    },error=>{

    })
  }

  
  filteredProducts(type:any){
    if(type == ''){
      this.filteredArray=this.products
    }else{
      this.filteredArray=this.products.filter((el:any)=>el.category == type)
    }
    
  }

}
