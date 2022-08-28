import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  @Output() signInCompleted:EventEmitter<boolean>=new EventEmitter(false); 
 
  constructor(private fb:FormBuilder, private loginService:LoginService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.createSignInForm();
  }
  createSignInForm(){
    this.signInForm=this.fb.group({
      "emailId":['',[Validators.required,Validators.email]],
      "password":['',[Validators.required]]
    })
  }
  onSubmitForm(){
    this.loginService.authLogin(this.signInForm.value).subscribe(el=>{
      if(Array.isArray(el) && el.length > 0){
        let user = el[0];
        user["token"]="ndcyg67";
        localStorage.setItem("user",JSON.stringify(user) );
        this.signInCompleted.emit(true);
        this.toastr.success("Log in successful")
        
      }else{
        this.toastr.error("User does not exist. Please register first and login again")
      }
    })
  }
}
