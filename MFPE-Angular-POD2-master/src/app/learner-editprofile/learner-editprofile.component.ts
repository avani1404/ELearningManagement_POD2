import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { User } from '../user';

@Component({
  selector: 'app-learner-editprofile',
  templateUrl: './learner-editprofile.component.html',
  styleUrls: ['./learner-editprofile.component.css']
})
export class LearnerEditprofileComponent implements OnInit {

  angForm!:FormGroup;
  constructor(private fb: FormBuilder,private service : ConnectionService,private router: Router) {
    this.createForm();
   }

   id=localStorage.getItem('LearnerUserId');
   user: User = new User(0,"","","","",0,"","","");
   res:any;

   createForm(){
    this.angForm = this.fb.group({
      password:['',[Validators.required]],
     // dob:['',[Validators.required, Validators.pattern('^([012][0-9]{2}|3[01])/(0[1-9]|1[12])|[0-9]{4}$')]],
     dob:['',[Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      contact:['',[Validators.required, Validators.pattern('^[1-9][0-9]{9}$')]],
      address :['',[Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // this.user.userid = 7;
  }

  xyz:User= new User(0,"","","","",0,"","","");
  getInfo(){
    
    console.log(this.user.userid);
    // this.id = this.user.userid;
    console.log(this.id);
    let reponse = this.service.getLearnerDetails(this.id);
    reponse.subscribe((data:any) => {
      console.log(data);
      this.xyz = data;
      console.log("Yaha pe h::::"+this.xyz);
    });    
    console.log(this.xyz);
    this.user = this.xyz;

  }

  //on submit update to database
  onSubmit(){
    
    let reponse = this.service.vEditProfile(this.user);
    reponse.subscribe(data => {
      this.res = data;
    });
    console.log(this.user.userid);
    if(this.res == "updated!")
    {//if update sucessfull
      console.log("done!");
      this.router.navigate(['/l_layout/sucessful_updation_l']);
    }
    else{

    }

  }  

}
