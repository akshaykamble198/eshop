import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpService:HttpService) { }

  registerUser(data:any){
    return this.httpService.postData("users",data)
  }
}
