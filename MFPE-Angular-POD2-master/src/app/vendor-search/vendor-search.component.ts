import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-vendor-search',
  templateUrl: './vendor-search.component.html',
  styleUrls: ['./vendor-search.component.css']
})
export class VendorSearchComponent implements OnInit {

  category:any;
  courseDetails:any;
  vendorid:any;
  
  constructor(private service:ConnectionService) { }

  ngOnInit(): void {
    this.vendorid=localStorage.getItem('VendorUserId');
    let response = this.service.getCoursesByVendorId(this.vendorid);
    response.subscribe((data:any) => this.courseDetails = data);
  }
  onSubmit(): void {
    
    console.log(this.category);
    let response = this.service.getCoursesByVendoridAndServicename(this.vendorid,this.category);
    response.subscribe(data => this.courseDetails = data);
    console.log(this.courseDetails);    
  }


}
