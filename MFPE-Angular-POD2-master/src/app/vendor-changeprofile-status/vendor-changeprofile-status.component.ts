import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-vendor-changeprofile-status',
  templateUrl: './vendor-changeprofile-status.component.html',
  styleUrls: ['./vendor-changeprofile-status.component.css']
})
export class VendorChangeprofileStatusComponent implements OnInit {

  constructor(public router:Router,private service : ConnectionService) { }

  ngOnInit(): void {
  }

  user:any;
  status:any;
  resp:any;
  onSubmit(){
    console.log(this.status);
    //mannually adding vendor id
    this.user=localStorage.getItem('VendorUserId');
    let reponse = this.service.changeProfileStatus(this.user,this.status);
    console.log(reponse);
        reponse.subscribe(data => {
          this.resp = data;
        });
        console.log( this.resp);
   if(this.resp =="Sucessful")
   {
     this.router.navigate(['/v_layout/sucessful_updation_v']);
      }
    else{
      this.resp="Unable to Update";
    }
  }

}
