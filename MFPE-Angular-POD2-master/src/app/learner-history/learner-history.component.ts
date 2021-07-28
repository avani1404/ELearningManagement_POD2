import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-learner-history',
  templateUrl: './learner-history.component.html',
  styleUrls: ['./learner-history.component.css']
})
export class LearnerHistoryComponent implements OnInit {

  purchase:any;
  id:any;
  constructor(private service : ConnectionService) { }

  ngOnInit(): void {
    // this.id=8;
    this.id=localStorage.getItem('LearnerUserId');
    let response = this.service.getAllPurchasedCourses(this.id);
    response.subscribe((data:any) =>{
        this.purchase = data;
        console.log(this.purchase);
    }
      );
  }

}
