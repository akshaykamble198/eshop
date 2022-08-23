import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  constructor(private fb:FormBuilder, private loginService:LoginService) { }

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
      console.log("response",el)
    })
  }
}
