import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-vendor-onlineservices-changestatus-courses',
  templateUrl: './vendor-onlineservices-changestatus-courses.component.html',
  styleUrls: ['./vendor-onlineservices-changestatus-courses.component.css']
})
export class VendorOnlineservicesChangestatusCoursesComponent implements OnInit {

  constructor(private service1 : ConnectionService,private router: Router) { }
 
  service:any;
  services=[];
  // services=[
  //   {id:1, name:"ch001"},
  //   {id:2, name:"ch002"},
  //   {id:3, name:"ch003"}
  // ];

  vid=localStorage.getItem('VendorUserId');;
  status:any;
  ngOnInit(): void {
    let reponse = this.service1.getAllCourseByVendorId(this.vid);
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
    alert("updated sucessfully!!");
    this.router.navigate(['/v_layout/vendor_onlineservices_changestatus']);   
    reponse.subscribe(data => {
      this.res = data;
      //this.router.navigate(['/v_layout/sucessful_updation_v']);   
    });
    console.log(this.res);
    if (this.res == "Succesful")
    {
    // this.router.navigate(['/v_layout/sucessful_updation_v']);   
    }
  }

}
