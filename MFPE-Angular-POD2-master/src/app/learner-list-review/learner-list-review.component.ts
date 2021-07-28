import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-learner-list-review',
  templateUrl: './learner-list-review.component.html',
  styleUrls: ['./learner-list-review.component.css']
})
export class LearnerListReviewComponent implements OnInit {

  users : any;
  constructor(private router:Router,private service:ConnectionService) { }

  learnerid=localStorage.getItem('LearnerUserId') as unknown as number;
  ngOnInit(): void {
    this.service.getCompletedPurchasesByLearnerid(this.learnerid).subscribe(data =>{
      this.users=data;
      console.log(this.users);
    })
  }

  
  
  toWriteReview(courseid:any,coursename:any,service:any,vendorname:any){
    sessionStorage.setItem("courseid",courseid);
    sessionStorage.setItem("coursename",coursename);
    sessionStorage.setItem("service",service);
    sessionStorage.setItem("vendorname",vendorname);

    this.router.navigateByUrl('/l_layout/learner_write_review');

  }

}
