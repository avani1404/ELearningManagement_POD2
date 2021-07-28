import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-a-vendor-onlineservices-changestatus-courses',
  templateUrl: './a-vendor-onlineservices-changestatus-courses.component.html',
  styleUrls: ['./a-vendor-onlineservices-changestatus-courses.component.css']
})
export class AVendorOnlineservicesChangestatusCoursesComponent implements OnInit {

  constructor(private service1 : ConnectionService,private router: Router) { }

  service:any;
  services=[];
  status:any;

  ngOnInit(): void {
    let reponse = this.service1.getAllCourseByVendorId(this.service);
    reponse.subscribe( (data:any) => {
      this.services = data;
    });
  console.log(this.services);
  }

  res:any;
  onSubmit(){
    console.log(this.status);
    console.log(this.service);
    let reponse = this.service1.updateCourseStatus(this.service,this.status);
    reponse.subscribe(data => {
      this.res = data;
    });
    console.log(this.res);
    if (this.res == "Succesful")
    {
      this.router.navigate(['/a_layout/sucessful_updation_a']);
    }
    
      

  }

}
