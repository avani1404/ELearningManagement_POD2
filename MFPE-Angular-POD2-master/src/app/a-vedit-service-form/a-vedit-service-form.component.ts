import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Course } from '../course';
import { Edit } from '../edit';

@Component({
  selector: 'app-a-vedit-service-form',
  templateUrl: './a-vedit-service-form.component.html',
  styleUrls: ['./a-vedit-service-form.component.css']
})
export class AVeditServiceFormComponent implements OnInit {

  edit = new Edit(0,"");
   res:any;
   courseid : any;
   exform! : FormGroup;
   edit1 = new Edit(0,"");
   

  constructor(private service : ConnectionService,private router: Router) { 
    this.exform = new FormGroup({
      'duration' : new FormControl(null, [Validators.required]),
      'desc' : new FormControl(null, [Validators.required, Validators.minLength(20)])
    })
  }

  rescor:Course = new Course(0,"",0,"",0,"","","") ;
  ngOnInit(): void {
    console.log(this.courseid);
    let reponse = this.service.getCurrentCourseDetails();
    reponse.subscribe(( data:any) => { this.rescor = data; });


    console.log("here look at this:::"+this.rescor);
    console.log(this.edit1);
    this.edit = this.edit1;
  }
  onSubmit(){
    
    let reponse = this.service.getUpdateCourseDetails(this.rescor);
    reponse.subscribe( ( data:any) => {
      this.res = data;
    });    
    console.log(this.res);
    

    if(this.res == "updated!")
    {//if update sucessfull
      console.log("done!");
      this.router.navigate(['/a_layout/sucessful_updation_a']);
    }
 
}

}
