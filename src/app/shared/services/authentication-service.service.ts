import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class AuthenticationServiceService {
    user:string|null="";
    LoginToken:string="loginType";
    constructor() { }
    // set login data
    setLoginData(){
    
  }


  // retrieve login data
  getLoginData(){
    this.user = sessionStorage.getItem(this.LoginToken)
    return this.user
  }

  checkUserType(): string{
   let type = localStorage.getItem('userType');
   
    return type;
  }
  logout(){
    localStorage.removeItem('userType');
  }

  isAuthenticated(){
    console.log(this.checkUserType(), typeof(this.checkUserType()))
    if(this.checkUserType()){
      return true
    } else {
      return false;
    }
  }

}
