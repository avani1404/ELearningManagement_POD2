import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AddService } from '../addservices';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-a-vendor-add-service',
  templateUrl: './a-vendor-add-service.component.html',
  styleUrls: ['./a-vendor-add-service.component.css']
})
export class AVendorAddServiceComponent implements OnInit {

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

        exform!: FormGroup;
        vid:any;
        //yaha  se vendor id one ja rii hh
        addservice = new AddService("","",0,"",1,"active","2020-09-11")
      
        constructor(private con_service : ConnectionService,private router:Router) { }

        message:any;
        submit() {

          console.log(this.addservice.vendorid);          
          this.con_service.addservice(this.addservice).subscribe(res => {console.log(res);
            this.message = res;

            if(this.message =="Coursename already exists")
            {
              alert("Course Already Exists!!");
            }else if(this.message =="saved"){   
             this.register();
               this.router.navigateByUrl('/a_layout/a_vendor_add_service_sucessfully');
            }

           } );
          
      }

      email1:any;
      loading = false;
  buttionText = "Submit";
  register() {   
    
    this.loading = true;
    this.buttionText = "Submiting...";
    let user = {
      name: "Sandhya",     
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
              

}


