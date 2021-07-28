import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-learner-search',
  templateUrl: './learner-search.component.html',
  styleUrls: ['./learner-search.component.css']
})
export class LearnerSearchComponent implements OnInit {

  category:any;
  courseDetails:any;

  service:any;
  services=[
    {id:1, name:"Asynchronous Learning"},
    {id:2, name:"Webinars"},
    {id:3, name:"Online Tests"}
  ];
  constructor(private service1:ConnectionService) { }

  ngOnInit(): void {
    let response = this.service1.getAllActiveCourses();
    response.subscribe((data:any) => this.courseDetails = data);
  }

  onSubmit(): void {
    console.log(this.service);
    let response = this.service1.getCoursesByServicename(this.service);
    response.subscribe(data => this.courseDetails = data);
    console.log(this.courseDetails);    
  }

}
