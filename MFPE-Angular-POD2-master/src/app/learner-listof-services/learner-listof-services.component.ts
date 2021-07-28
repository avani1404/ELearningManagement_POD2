import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Purchase } from '../purchase';

@Component({
  selector: 'app-learner-listof-services',
  templateUrl: './learner-listof-services.component.html',
  styleUrls: ['./learner-listof-services.component.css']
})
export class LearnerListofServicesComponent implements OnInit {

  users : any;
  
  constructor(private service1 : ConnectionService,private router:Router) { }


  learnerid=localStorage.getItem('LearnerUserId') as unknown as number;
  ngOnInit(): void {
    this.service1.getAvailableServices(this.learnerid).subscribe(data =>{
      this.users=data;
      console.log(this.users);
    })
  }

  message:any;
  purchase : Purchase= new Purchase(0,0,0,0,"Not Completed");
  toPurchase(courseid:any,vendorid:any){      
    this.purchase.learnerid = this.learnerid; 
    this.purchase.courseid = courseid;
    this.purchase.vendorid = vendorid;
    console.log(courseid);
    let response = this.service1.savePurchaseHistory(this.purchase);
    response.subscribe(data => {
      this.message = data;
    });

    this.router.navigateByUrl('/l_layout/purchase_sucesfull');
  }

  toViewReview(courseid:any,coursename:any){
    sessionStorage.setItem('rcourseid',courseid);   
    sessionStorage.setItem('rcoursename',coursename);  
    this.router.navigateByUrl('/l_layout/learner_view_review');

  }

}
