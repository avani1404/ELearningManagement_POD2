import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {

  users : any;
  constructor(private service : ConnectionService, private router:Router) { }

  ngOnInit(): void {
    let response = this.service.getUsers();
    response.subscribe(data => this.users = data);
  }

  toUpdate(userid:any){
    console.log("reached to Update!!!!");
    this.router.navigateByUrl('/a_layout/admin_update_user');

  }

   //currentUrl = this.router.url;

  message:any;
  toChangeStatus(userid:number){
    console.log(userid);
    console.log("reached to Change status!!!");
    let vendorid = userid;
    let response = this.service.changeStatus(vendorid);
    response.subscribe((data:any)=>{
      this.message = data;
      console.log(data);
      
    });
    //this.router.navigateByUrl('/a_layout/admin_user_list');
   // this.ngOnInit();
  // this.router.onSameUrlNavigation="reload";
  // this.router.navigate([this.currentUrl]);
  this.router.navigateByUrl('/a_layout/sucessful_updation_a');
    console.log("reached to Change status!!22!");
    
  }

}
