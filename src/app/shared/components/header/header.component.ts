import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actionType:string="SignIn";
  isUserLoggedIn:boolean=false;
  user:any;
  @ViewChild('closebutton') closebutton: any;
  constructor(private authsvc:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
    this.getUserDetails();
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
