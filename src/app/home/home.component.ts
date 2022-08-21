import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 products:any=[ ];

filteredArray:any=[];
  constructor( ) { }

  ngOnInit(): void {
    
   this.products=[{
    "id":1,
    "img":"./assets/images/t-shirt1.png",
    "category":"fashion",
    "title":"EyeBogler",
    "details":"Striped men rounf neck t-shirt",
    "price":299
  },
  {
    "id":2,
    "img":"./assets/images/t-shirt2.png",
    "category":"fashion",
    "title":"Urbano",
    "details":"Solid men t-shirt",
    "price":499
  },
  {
    "id":3,
    "img":"./assets/images/mobile1.png",
    "category":"mobiles",
    "title":"realme C25_Y(Metal Grey,128 GB)",
    "details":"4 GB RAM | 128 GB ROM",
    "price":11999
  },
  {
    "id":4,
    "img":"./assets/images/mobile2.png",
    "category":"mobiles",
    "title":"APPLE iphone 13 Pro",
    "details":"(Silver , 256 GB)",
    "price":109900
  },
  {
    "id":5,
    "img":"./assets/images/grocery1.png",
    "category":"grocery",
    "title":"Farmley",
    "details":"1 kg almonds",
    "price":701
  },
  {
    "id":6,
    "img":"./assets/images/grocery2.png",
    "category":"grocery",
    "title":"Ariel",
    "details":"4 kg detergent powder",
    "price":512
  },
  {
    "id":7,
    "img":"./assets/images/electronics1.png",
    "category":"electronics",
    "title":"Samsung washing machine",
    "details":"6 kg 5 Star With Hygiene Steam and Ceramic Heater Fully Automatic Front Load with In-built Heater Silver ",
    "price":23990
  },
  {
    "id":8,
    "img":"./assets/images/electronics2.png",
    "category":"electronics",
    "title":"Godrej",
    "details":"255 L Frost Free Double Door 2 Star Refrigerator",
    "price":21990
  },
  {
    "id":9,
    "img":"./assets/images/home1.png",
    "category":"home",
    "title":"IWS",
    "details":"144 TC Microfiber Double Printed Flat Bedsheet",
    "price":599
  },
  {
    "id":10,
    "img":"./assets/images/home2.png",
    "category":"home",
    "title":"Bharat Sofa set",
    "details":"Alina Fabric 3 + 2 Sofa Set",
    "price":25999
  },
  {
    "id":11,
    "img":"./assets/images/babycare1.png",
    "category":"babycare",
    "title":"Miss & Chief",
    "details":"Polycotton Baby Bed Sized Bedding Set ",
    "price":1999
  },
  {
    "id":12,
    "img":"./assets/images/babycare2.png",
    "category":"babycare",
    "title":"MamyPoko",
    "details":"Extra Absorb Pants - XL  (70 Pieces)",
    "price":1059
  },
  {
    "id":13,
    "img":"./assets/images/accesorries1.png",
    "category":"accesorries",
    "title":"LINO PERROS",
    "details":"Women Pink Shoulder Bag - Mini",
    "price":1349
  },
  {
    "id":14,
    "img":"./assets/images/accesorries2.png",
    "category":"accesorries",
    "title":"Nitrogen",
    "details":"Women Casual, Evening, Party Tan Canvas Belt",
    "price":198
  }]
  this.filteredArray=this.products;
   
  }
  filteredProducts(type:any){
    if(type == ''){
      this.filteredArray=this.products
    }else{
      this.filteredArray=this.products.filter((el:any)=>el.category == type)
    }
    
  }

}
