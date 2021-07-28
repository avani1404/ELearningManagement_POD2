import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-addnew-user',
  templateUrl: './admin-addnew-user.component.html',
  styleUrls: ['./admin-addnew-user.component.css']
})
export class AdminAddnewUserComponent implements OnInit {

  user: User = new User(0,"","","","",0,"","","");
  exform!: FormGroup;
  date:any;
  age:any;
  role:any;
 // message:any;
  constructor(private fb: FormBuilder,private router: Router,private service : ConnectionService) { 
    this.createForm();
  }

  createForm(){
    this.exform = this.fb.group({
      'name' : new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'phone' : new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^[1-9][0-9]{9}$')
      ]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'dob': new FormControl(null, Validators.required),
      'atc': new FormControl(false, [Validators.requiredTrue]),
      'address' : new FormControl(null, [Validators.required, Validators.minLength(10)]),
      //'role': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {
    console.log(this.exform.status);
    console.log(this.role);
    this.user.role = this.role;
    this.user.status = "Active";
    this.date = this.user.dob;    
    var today = new Date();
    console.log("today:::: "+today);
    var birthDate = new Date(this.date);
    console.log(birthDate);
     this.age = today.getFullYear() - birthDate.getFullYear();
     console.log(this.age);
    var m = today.getMonth() - birthDate.getMonth();
    console.log(m);
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
       this.age--;
    }
    console.log(this.age);
    if(this.age > 18)
    {
      this.age=this.exform.status;
      console.log(this.user);
      if(this.exform.status == "VALID" )
      {
        let reponse = this.service.doRegistration(this.user);
        reponse.subscribe(data => {
          this.age = data;
        });
      
      //  this.user=[0,"","","","",456,"","",""];
      this.user= new User(0,"","","","",0,"","","");
      this.router.navigate(['a_layout/a_register_sucessful']);
      }  
      else{
        //this.age="Fill All the Details Correcty to Register.";
        return this.age;
      }
      
      
    }
    else{
      this.age="Fill the Correct details to Add New User.";
      return this.age;
    }
  }
  ngOnInit(): void {
  }

}
