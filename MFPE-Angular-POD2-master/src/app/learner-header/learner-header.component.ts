import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learner-header',
  templateUrl: './learner-header.component.html',
  styleUrls: ['./learner-header.component.css']
})
export class LearnerHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  termination(){
    console.log("Bubieee!!!!");
    localStorage.removeItem('LearnerUserId');
    localStorage.removeItem('role');
    this.router.navigate(['landing_page']);
  }


}
