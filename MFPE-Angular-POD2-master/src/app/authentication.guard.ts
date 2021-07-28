import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate{
  
    constructor(private router:Router,private Authguardservice:AuthguardServiceService){}
    canActivate():boolean{
      console.log("In canActivate");
      if (!this.Authguardservice.gettoken()) {  
        this.router.navigate(['/landing_page']);
        return false;  
    }  
    // return this.Authguardservice.gettoken();  
    return true;
    }

    // canActivateChild(){
    //   console.log("In canActivateChild");
    //   if (!this.Authguardservice.gettoken()) {  
    //     this.router.navigate(['/landing_page']);  
    // }  
    // return this.Authguardservice.gettoken(); 
    // }
}
