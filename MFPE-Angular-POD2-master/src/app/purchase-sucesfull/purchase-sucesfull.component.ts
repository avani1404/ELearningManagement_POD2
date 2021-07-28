import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-sucesfull',
  templateUrl: './purchase-sucesfull.component.html',
  styleUrls: ['./purchase-sucesfull.component.css']
})
export class PurchaseSucesfullComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigateByUrl('l_layout/learner_onlineservicespage');
  }

}
