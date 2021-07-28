import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-learner-subscription',
  templateUrl: './learner-subscription.component.html',
  styleUrls: ['./learner-subscription.component.css']
})
export class LearnerSubscriptionComponent implements OnInit {

  constructor(private service:ConnectionService) { }

  ngOnInit(): void {
  }

  res:any="";
  lid = localStorage.getItem('LearnerUserId') as unknown as number;

  subscribe(){
    console.log(this.lid);

   let response= this.service.saveAllSubscribedLearners(this.lid);

   response.subscribe((data:any) =>{ 
    this.res = data;    
    });   

    console.log(this.res);

    if(this.res =="subscribed"){
          alert("Subscribed Sucessfully!!!!");
    }else if( this.res =="already subscribed"){
      alert("Already Subscribed!!!!");
    }else{
      alert("Nii Ho rha kuchh bhiii!!!!");
    }
  }


}
