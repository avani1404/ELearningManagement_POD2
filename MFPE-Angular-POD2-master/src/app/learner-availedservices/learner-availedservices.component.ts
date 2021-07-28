import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-learner-availedservices',
  templateUrl: './learner-availedservices.component.html',
  styleUrls: ['./learner-availedservices.component.css']
})
export class LearnerAvailedservicesComponent implements OnInit {

  constructor(private service : ConnectionService, private router:Router) { }

  users:any;
  id:any;
  ngOnInit(): void {
    this.id=localStorage.getItem('LearnerUserId');
    // this.id=8;
    let response = this.service.getAvailedServices(this.id);
    response.subscribe((data:any) =>
        this.users = data        
      );

      
      console.log(this.users);
  }

  finalcourseid:any;
  res:any;
  goToDetails(courseid:number){
    console.log("yaa Working!!!!");
    console.log(courseid);

    let response = this.service.getCourseDetails(courseid);
    response.subscribe( data =>
        this.res = data
      );
      this.finalcourseid = courseid as unknown as string;
      localStorage.setItem('courseid',this.finalcourseid);
      this.router.navigateByUrl('/l_layout/learner_course_description');
      console.log(this.res);

  }

}
