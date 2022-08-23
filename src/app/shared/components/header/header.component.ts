import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  actionType:string="SignIn";
  constructor() { }

  ngOnInit(): void {
  }
  handleAction(){
    this.actionType="SignUp"
  }
  signUpHandler(event:boolean){
    if(event){
      this.actionType = "SignIn"
    }
  }
}
