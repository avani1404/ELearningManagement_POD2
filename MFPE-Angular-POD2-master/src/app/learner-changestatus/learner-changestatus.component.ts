import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-learner-changestatus',
  templateUrl: './learner-changestatus.component.html',
  styleUrls: ['./learner-changestatus.component.css']
})
export class LearnerChangestatusComponent implements OnInit {

  user:any;
  status:any;
  resp:any;
  constructor(public router:Router,private service : ConnectionService) { }

  onSubmit(){
    console.log(this.status);
    //mannually adding vendor id
    this.user=localStorage.getItem('LearnerUserId');
    let reponse = this.service.changeProfileStatus(this.user,this.status);
        reponse.subscribe(data => {
          this.resp = data;
        });
   if(this.resp =="Sucessful")
   {
     this.router.navigate(['/l_layout/sucessful_updation_l']);
      }
    else{
      this.resp="Unable to Update";

    }
  }

  ngOnInit(): void {
  }

}
