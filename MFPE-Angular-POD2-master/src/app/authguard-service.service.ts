import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }

  gettoken(){
    console.log("In AuthGuard Service Class");
    if(localStorage.getItem('role')=="admin")
    {
      return !!localStorage.getItem('userId');
    }
    else if(localStorage.getItem('role')=="vendor"){
      return !!localStorage.getItem('VendorUserId');
    }
    else if(localStorage.getItem('role')=="learner"){
      return !!localStorage.getItem('LearnerUserId');
    }
    return false;
  }

  // gettokenvl(){
  //   console.log("In AuthGuard Service Class for V L");
  //   return !!localStorage.getItem('VendorUserId');
  // }

  // gettokenll(){
  //   console.log("In AuthGuard Service Class for L L");
  //   return !!localStorage.getItem('LearnerUserId');
  // }

  
}
