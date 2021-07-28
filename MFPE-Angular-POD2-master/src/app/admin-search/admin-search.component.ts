import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
//import {  FormControl } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {

  users : any;
  id : any = "";
  role:any;
  constructor(private service : ConnectionService) { }


  // roles:any=["Learner","Vendor"];
  // radioChangeHandler(event:any){
  //   this.rolef=event.target.value;
  // }

  onSubmit(): void {
    console.log(this.role);
    let response = this.service.getUsersByrole(this.role);
    response.subscribe(data => this.users = data);
    console.log(this.users);    
  }


  ngOnInit(): void {
    //to call api without clicking any button
    let response = this.service.getUsers();
    response.subscribe(data => this.users = data);
    //this.users.dob.slice(0,9);
  }
 

}
