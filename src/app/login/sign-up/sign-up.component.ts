import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
signUpForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createSignUpForm();
  }
  createSignUpForm(){
    this.signUpForm=this.fb.group({
      "firstName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]],
      "lastName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]],
      "mobileNumber":['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      "dateOfBirth":['',[Validators.required]],
      "emailId":['',[Validators.required,Validators.email]],
      "password":['',[Validators.required]],
      "confirmPassword":['',[Validators.required]],
      "address":this.fb.group({
        "line1":['',[Validators.required]],
        "line2":['',[]],
        "city":['',[Validators.required]],
        "state":['',[Validators.required]],
        "zipcode":['',[Validators.required]],
      })
      
    })
  }
  onSubmit(){
    console.log("values",this.signUpForm.value)
  }
  get firstname(){
   return this.signUpForm.get("firstName")
  }
  get lastname(){
    return this.signUpForm.get("lastName")
   }
   get mob(){
    return this.signUpForm.get("mobileNumber")
   }
   get email(){
    return this.signUpForm.get("emailId")
   }

   get line1(){
    return this.signUpForm.get("line1")
   }
   get city(){
    return this.signUpForm.get("city")
   }
   get state(){
    return this.signUpForm.get("state")
   }
   get zip(){
    return this.signUpForm.get("zipcode")
   }
  
}
