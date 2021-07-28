import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Login } from '../login';

@Component({
  selector: 'app-l-login',
  templateUrl: './l-login.component.html',
  styleUrls: ['./l-login.component.css']
})
export class LLoginComponent implements OnInit {

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

  getLearnerUserId: any;
  onSubmit(){
    // this.service.login(this.login).subscribe(res =>console.log(res), err => console.log(err))
    if(this.exform.status == "VALID" )
    {
      this.login.role="Learner";
     let reponse = this.service.login(this.login);
     reponse.subscribe(data => {
       this.message = data;
     });

     //session
     if(this.message == "welcome")
     {
      console.log(this.login.email);
      let response2 = this.service.getUserId(this.login.email);
      response2.subscribe((data:any) => {
       this.getLearnerUserId = data;
       console.log(this.getLearnerUserId);
       localStorage.setItem('LearnerUserId',this.getLearnerUserId);
       
       localStorage.setItem('role','learner');

       this.router.navigate(['/l_layout']);
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
