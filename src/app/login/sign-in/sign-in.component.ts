import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  constructor(private fb:FormBuilder) { }

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

  }
}
