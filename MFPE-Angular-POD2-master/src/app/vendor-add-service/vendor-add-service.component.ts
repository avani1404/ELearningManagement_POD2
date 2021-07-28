
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AddService } from '../addservices';
import { ConnectionService } from '../connection.service';


@Component({
  selector: 'app-vendor-add-service',
  templateUrl: './vendor-add-service.component.html',
  styleUrls: ['./vendor-add-service.component.css']
})
export class VendorAddServiceComponent implements OnInit {

  // angForm!:FormGroup;
  // constructor(private fb: FormBuilder) {
  //   this.createForm();
  //  }

  //  createForm(){
  //   this.angForm = this.fb.group({
  //     name:['',[Validators.required]],
  //     duration:['',[Validators.required, Validators.pattern('^[0-9]{2}$')]],      
  //     description :['',[Validators.required, Validators.minLength(10)]]
  //   });
  //  }

  // ngOnInit(): void {
  // }
  exform!: FormGroup;
  date:any;
  latestDate:any;
  //vendor ID change krna h and date ko bhiiiii!!!!1
  addservice = new AddService("","",0,"", 0 ,"active","2021-07-29")
 
  constructor(private con_service : ConnectionService, private router:Router) { }

  
 tempid:any;
  ngOnInit(): void {
    this.tempid=localStorage.getItem('VendorUserId') as unknown as Number;
    this.exform = new FormGroup({
      'service' : new FormControl(null, [Validators.required]),
      'coursename' : new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      'coursedurration': new FormControl(null, Validators.required),
      'coursedescription' : new FormControl(null, [Validators.required, Validators.minLength(50)]),
    });


    this.email1=this.con_service.getMailData();
    let response = this.con_service.getMailData();
    response.subscribe((data:any)=>{
        this.email1=data;
        console.log(this.email1); }
    );

  }
 
  email1:any;
  message:any;
  submit() {
    
    //this.addservice.vendorid = localStorage.getItem('VendorUserId');
    this.addservice.vendorid = this.tempid;
    this.addservice.launchdate = this.latestDate;
    this.con_service.addservice(this.addservice).subscribe(res =>{
      console.log(res);
      this.message = res;

      if(this.message =="Coursename already exists")
      {
        alert("Course Already Exists!!");
      }else if(this.message =="saved"){   
      this.register();
      this.router.navigateByUrl('/v_layout/vendor_add_service_sucessfully');
    }
    }
    );
   
}

//user:any;
loading = false;
  buttionText = "Submit";
  register() {

    
    //this.email1= ["sandhya.choudhari429@gmail.com","shubhankarpaul1409@gmail.com","dewanganmoon920@gmail.com","anotherbestworld@gmail.com"];
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: "Sandhya",
     // email: this.emailFormControl.value
    // email:this.email1
    //  this.email1= ["sandhya.choudhari429@gmail.com","shubhankarpaul1409@gmail.com","dewanganmoon920@gmail.com","anotherbestworld@gmail.com"],
      email:this.email1
    }
    this.con_service.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      (data:any) => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      }
 
    );
  }

  // get coursename() {
  //   return this.exform.get('coursename');
  // }
  // get service() {
  //   return this.exform.get('service');
  // }
  // get coursedurration() {
  //   return this.exform.get('coursedurration');
  // }
  // get coursedescription() {
  //   return this.exform.get('coursedescription');
  // } 

}
