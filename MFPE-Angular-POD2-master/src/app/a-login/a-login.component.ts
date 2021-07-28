import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Login } from '../login';

@Component({
  selector: 'app-a-login',
  templateUrl: './a-login.component.html',
  styleUrls: ['./a-login.component.css']
})
export class ALoginComponent implements OnInit {

  getuserId: any;
  exform!:FormGroup;
  login = new Login("","","");
  message :any;
  
  constructor(private service : ConnectionService,private router: Router) { }

  ngOnInit(): void {
    this.exform = new FormGroup({
 
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    });
  }


  
  
  onSubmit(){
    // this.service.login(this.login).subscribe(res =>console.log(res), err => console.log(err))
    if(this.exform.status == "VALID" )
    {
      this.login.role="Admin";
     let reponse = this.service.login(this.login);
     reponse.subscribe(data => {
       this.message = data;
     });


     //applying session here
     //admin@admin.com
      //admin
     
     if(this.message == "welcome")
     {

      console.log(this.login.email);
       let response2 = this.service.getUserId(this.login.email);
       response2.subscribe((data:any) => {
        this.getuserId = data;
        console.log(this.getuserId);
        localStorage.setItem('userId',this.getuserId);
       
        localStorage.setItem('role','admin');
        
        this.router.navigate(['/a_layout']);
      });
      console.log("Printing session data"+localStorage.getItem('userId'));
      console.log(this.message);

       
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
