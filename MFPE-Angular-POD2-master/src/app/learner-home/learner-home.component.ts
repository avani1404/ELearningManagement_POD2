import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-home',
  templateUrl: './learner-home.component.html',
  styleUrls: ['./learner-home.component.css']
})
export class LearnerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("L Id From L Home:::"+localStorage.getItem('LearnerUserId'));
  }

}
