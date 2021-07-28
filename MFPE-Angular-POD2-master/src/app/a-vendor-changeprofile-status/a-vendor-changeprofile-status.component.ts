import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-a-vendor-changeprofile-status',
  templateUrl: './a-vendor-changeprofile-status.component.html',
  styleUrls: ['./a-vendor-changeprofile-status.component.css']
})
export class AVendorChangeprofileStatusComponent implements OnInit {

  constructor(public router:Router,private service : ConnectionService) { }

  ngOnInit(): void {
  }
  user:any;
  status:any;
  resp:any;
  msg:any;
  
  onSubmit(){
    console.log(this.status);
        // this.user =this.id;
    console.log(this.user);
    let reponse = this.service.changeProfileStatus(this.user,this.status);
        reponse.subscribe(data => {
          this.resp = data;
        });
   if(this.resp =="Sucessful")
   {
     //this.router.navigate(['v_sucessful_updation']);
     this.msg="Updated Sucessfully!!";
      }
    else{
      this.msg="Unable to Update";

    }
  }

}
