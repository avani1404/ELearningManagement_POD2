import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { User } from '../user';

@Component({
  selector: 'app-vendor-editprofile',
  templateUrl: './vendor-editprofile.component.html',
  styleUrls: ['./vendor-editprofile.component.css']
})
export class VendorEditprofileComponent implements OnInit {

  angForm!:FormGroup;
  constructor(private fb: FormBuilder,private service : ConnectionService,private router: Router) {
    this.createForm();
   }

   id:any;
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

   //sending Id getting info
   getInfo(){
    console.log("From Get Info"+this.id);
    let reponse = this.service.getUserDetail(this.id);
    reponse.subscribe(data => {
      this.res = data;
    });    
    console.log(this.res);
    this.user = this.res;

  }

  ngOnInit(): void {
    this.id = localStorage.getItem('VendorUserId');
    console.log("Here onInit: "+this.id);
    this.getInfo();
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
      this.router.navigate(['/v_layout/sucessful_updation_v']);
    }
    else{

    }

  }

}
