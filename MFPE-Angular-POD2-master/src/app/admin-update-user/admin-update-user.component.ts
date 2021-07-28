import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-update-user',
  templateUrl: './admin-update-user.component.html',
  styleUrls: ['./admin-update-user.component.css']
})
export class AdminUpdateUserComponent implements OnInit {

  angForm!:FormGroup;
  constructor(private fb: FormBuilder,private service : ConnectionService,private router: Router) {
    this.createForm();
   }
   
   id:any;
   user: User = new User(0,"","","","",0,"","","");
   res:any;
   
   createForm(){
     this.angForm = this.fb.group({
       password:['',[Validators.required, Validators.pattern('/^(?=.[A-Za-z])(?=.\d)(?=.[$@$!%#?&])[A-Za-z\d$@$!%*#?&]{8,}$/')]],
      //  dob:['',[Validators.required, Validators.pattern('^([012][0-9]{2}|3[01])/(0[1-9]|1[12])|[0-9]{4}$')]],
      // dob:['',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
     //"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
     dob:['',[Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
      contact:['',[Validators.required, Validators.pattern('^[1-9][0-9]{9}$')]],
       address :['',[Validators.required, Validators.minLength(10)]]
     });
   }
  ngOnInit(): void {
  }

  //sending Id getting info
  getInfo(){
    console.log(this.id);
    let reponse = this.service.getUserDetail(this.id);
    reponse.subscribe(data => {
      this.res = data;
    });    
    console.log(this.res);
    this.user = this.res;

  }

  //on submit update to database
  onSubmit(){
    
    let reponse = this.service.vEditProfile(this.user);
    reponse.subscribe(data => {
      this.res = data;
    });

    if(this.res == "updated!")
    {//if update sucessfull
      console.log("done!");
      this.router.navigate(['/a_layout/sucessful_updation_a']);
    }
    else{

    }

  }

}
