import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passMisMatch } from 'src/app/shared/validators/custom validators';
import { EventEmitter } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

signUpForm!:FormGroup;

@Input() actionName='';

@Output() signUpCompleted :EventEmitter<boolean>=new EventEmitter(false);
  formDetails: any;

  constructor(private fb:FormBuilder,private loginService:LoginService, private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.createSignUpForm();
    this.formDetails = this.auth.getUser();
    if(this.formDetails != null){
      this.signUpForm.patchValue(this.formDetails);
    }
  }



  createSignUpForm(){
    this.signUpForm=this.fb.group({
      "firstName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]],
      "lastName":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]],
      "mobileNumber":['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      "dateOfBirth":['',[Validators.required]],
      "emailId":['',[Validators.required,Validators.email]],
      "password":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "confirmPassword":['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
      "address":this.fb.group({
        "line1":['',[]],
        "line2":['',[]],
        "city":['',[]],
        "state":['',[]],
        "zipcode":['',[]],
      })
      
    },{validator:passMisMatch}
    )
  }





  onSubmit(){
    console.log("values",this.signUpForm.value);
    if(this.signUpForm.valid){
    this.loginService.registerUser(this.signUpForm.value).subscribe(el=>{
      console.log("response",el);
      this.signUpCompleted.emit(true)
      

    })
  }
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
   get confirmPassword(){
    return this.signUpForm.get("confirmPassword")
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
