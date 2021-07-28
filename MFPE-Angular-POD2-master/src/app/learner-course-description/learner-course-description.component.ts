import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionService } from '../connection.service';
import { Course } from '../course';

@Component({
  selector: 'app-learner-course-description',
  templateUrl: './learner-course-description.component.html',
  styleUrls: ['./learner-course-description.component.css']
})
export class LearnerCourseDescriptionComponent implements OnInit {

  constructor(private router: Router,private service : ConnectionService) { }

  //learner id from session
  learnerid=localStorage.getItem('LearnerUserId');
  // learnerid=9;
  courseid:any;
  courseDetail:any;
  ngOnInit(): void {
    // this.courseid=1;
    this.courseid = localStorage.getItem('courseid');
    let reponse = this.service.getCourseDetails(this.courseid);
        reponse.subscribe( (data:any) => {
          this.courseDetail = data;
        });
        console.log(this.courseDetail);

  }


  res:any;
  changeStatus(){
    console.log(this.courseid);
    let reponse = this.service.changeCourseCompletionStatus(this.learnerid,this.courseid);
        reponse.subscribe( (data:any) => {
          this.res = data;
        });
    console.log(this.res);
    this.router.navigateByUrl('/l_layout/learner_comleted_sucessfully');

  }

}
