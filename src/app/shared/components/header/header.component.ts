import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { async, Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Product } from 'src/app/core/model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actionType:string="SignIn";
  isUserLoggedIn:boolean=false;
  user:any;
  cartCount:Observable<Product[]> | null =null;
  @ViewChild('closebutton') closebutton: any;
  constructor(private authsvc:AuthenticationService,private route:Router,private cart:CartService) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.cartCount=this.cart.selectItem
  }
  handleAction(){
    this.actionType="SignUp"
  }
  signUpHandler(event:boolean){
    if(event){
      this.actionType = "SignIn"
    }
  }
  getUserDetails(){
    let response=this.authsvc.getUser();
      if(response != null){
        this.isUserLoggedIn=true;
        this.user=response;
      }
  }
  signInHandler(event:boolean){
    if(event){
      this.closebutton.nativeElement.click();
      this.getUserDetails();
    }
  }
  logout(){
    localStorage.removeItem("user");
    this.isUserLoggedIn=false;
    // location.reload();
    this.route.navigate(['/home'])
  }
}
