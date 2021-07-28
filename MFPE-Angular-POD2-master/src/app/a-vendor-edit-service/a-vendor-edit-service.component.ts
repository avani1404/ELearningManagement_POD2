import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-a-vendor-edit-service',
  templateUrl: './a-vendor-edit-service.component.html',
  styleUrls: ['./a-vendor-edit-service.component.css']
})
export class AVendorEditServiceComponent implements OnInit {

  constructor(private router: Router,private service1 : ConnectionService) { }

  service:any;
  services=[
    {id:1, name:"Asynchronous Learning"},
    {id:2, name:"Webinars"},
    {id:3, name:"Online Tests"}
  ];

  course:any;
  courses=[
    {id:0, name:0}
    // {id:1, name:"ch00l"},
    // {id:2, name:"ch002"},
    // {id:3, name:"ch003"},
    // {id:4, name:"ch004"}
  ];


  ngOnInit(): void {
  }

  onEdit(){
   
    console.log(this.service);
    console.log(this.course);
    let response = this.service1.saveCurrentCourseId(this.course);
    response.subscribe(data => this.res = data);
   // if(this.res == "Saved")
    
      //console.log(this.res);
      this.router.navigate(['a_layout/a_vedit_service_form']);
    
    

  }

  vendorid:any;
  res:any;
  getInfo(){
    console.log(this.service);    
    this.vendorid = 1;
    let response = this.service1.getCourseidByVendoridAndServicename(this.vendorid,this.service);
    response.subscribe( data =>
        this.res =data
      );
      console.log(this.res);
      this.courses = this.res;
      console.log(this.courses);

  }

}
