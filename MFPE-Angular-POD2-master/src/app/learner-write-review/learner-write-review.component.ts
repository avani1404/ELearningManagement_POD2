import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-learner-write-review',
  templateUrl: './learner-write-review.component.html',
  styleUrls: ['./learner-write-review.component.css']
})
export class LearnerWriteReviewComponent implements OnInit {

  service:any;
  courseid:any;
  coursename:any;
  vendorname:any;
  review:any;
  constructor(private router:Router,private service1:ConnectionService) { }

  learnerid=localStorage.getItem('LearnerUserId') as unknown as number;
  ngOnInit(): void {
   this.courseid= sessionStorage.getItem("courseid");
   this.coursename=  sessionStorage.getItem("coursename");
   this.service=  sessionStorage.getItem("service");
   this.vendorname= sessionStorage.getItem("vendorname");
    console.log( sessionStorage.getItem("courseid"));
    console.log(sessionStorage.getItem("coursename"));
    console.log( sessionStorage.getItem("service"));
    console.log(sessionStorage.getItem("vendorname"));
  }
  res:any;
  onSubmit(){
    console.log(this.review);
    let response =this.service1.saveReviews(this.learnerid,this.courseid,this.review);
    response.subscribe((data:any) =>
      this.res=data
      );
      console.log(this.res);

     
      
      
       this.router.navigateByUrl('/l_layout/sucessful_updation_l');
     
    
  }

}
