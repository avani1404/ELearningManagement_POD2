import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Login } from '../login';

@Component({
  selector: 'app-v-login',
  templateUrl: './v-login.component.html',
  styleUrls: ['./v-login.component.css']
})
export class VLoginComponent implements OnInit {

  exform!:FormGroup;
  login = new Login("","","");
  message :any;
  //message="blaww";

  constructor(private service : ConnectionService,private router: Router) { }


  ngOnInit(): void {
    this.exform = new FormGroup({
 
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
    }
   
    getVendorUserId:any;
    onSubmit(){
     // this.service.login(this.login).subscribe(res =>console.log(res), err => console.log(err))
     if(this.exform.status == "VALID" )
     {
       this.login.role="Vendor";
      let reponse = this.service.login(this.login);
      reponse.subscribe(data => {
        this.message = data;
      });
      if(this.message == "welcome")
      {
        console.log(this.login.email);
      let response2 = this.service.getUserId(this.login.email);
      response2.subscribe((data:any) => {
       this.getVendorUserId = data;
       console.log(this.getVendorUserId);
       localStorage.setItem('VendorUserId',this.getVendorUserId);  
       localStorage.setItem('role','vendor');  
       this.router.navigate(['/v_layout']);   
     });

      
      }
      else{
       this.message="Please enter correct emailId and password."
      }

     }
     else{
        this.message="Please Fill the Details Correctly!!";
        return this.message;
     }
    
    }



  }


