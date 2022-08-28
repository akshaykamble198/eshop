import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( ) { }
getUser(){
  let user:any
  user=localStorage.getItem("user");
  user=JSON.parse(user);
  return user;
}


}
