import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-learner-show-newcourses',
  templateUrl: './learner-show-newcourses.component.html',
  styleUrls: ['./learner-show-newcourses.component.css']
})
export class LearnerShowNewcoursesComponent implements OnInit {

  users : any;

  constructor(private service : ConnectionService, private acrouter : ActivatedRoute,private router:Router) { }

  
 // learnerid="9";
  ngOnInit(): void {
    this.service.getLatestCourses().subscribe(data =>{
      this.users=data;
      console.log(this.users);
    })
  }

  purchase : Purchase= new Purchase(0,0,0,0,"Not Completed");
  //this.purchase.learnerid=localStorage.getItem('LearnerUserId');

  toPurchase(courseid:any){
    console.log(courseid);
    this.router.navigateByUrl('/l_layout/purchase_sucesfull');     
  }

}
