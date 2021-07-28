import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-learner-view-review',
  templateUrl: './learner-view-review.component.html',
  styleUrls: ['./learner-view-review.component.css']
})
export class LearnerViewReviewComponent implements OnInit {

  constructor(private service:ConnectionService) { }

  reviewSet:any;
  coursename= sessionStorage.getItem('rcoursename');
  courseid = sessionStorage.getItem('rcourseid');
  ngOnInit(): void {
    let response= this.service.getReviewsByCourseid(this.courseid);
    response.subscribe((data:any) =>
        this.reviewSet = data
      );
  }

}
