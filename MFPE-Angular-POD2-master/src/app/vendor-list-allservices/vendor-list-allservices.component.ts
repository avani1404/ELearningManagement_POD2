import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-vendor-list-allservices',
  templateUrl: './vendor-list-allservices.component.html',
  styleUrls: ['./vendor-list-allservices.component.css']
})
export class VendorListAllservicesComponent implements OnInit {

  users : any;
 
  constructor(private service : ConnectionService, private router : ActivatedRoute) { }

  vendorid=localStorage.getItem('VendorUserId');//add session data here

  ngOnInit(): void {
    this.service.showallcourses(this.vendorid).subscribe(data =>{
      this.users=data;
      console.log(this.users);
    })
  }

}
