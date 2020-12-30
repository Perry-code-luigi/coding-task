import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private router:Router) { }

  singin(email:string,password:string){
    let dummyemail:string="Perrybroglia@gmail.com";
    let dummypass="Perry452432";
    if(email==dummyemail && password==dummypass){
      window.localStorage.setItem("user", "userlogged");
      this.router.navigate(['home']);
    }
  }
}
