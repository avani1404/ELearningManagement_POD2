import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-a-vendor-list-allservices',
  templateUrl: './a-vendor-list-allservices.component.html',
  styleUrls: ['./a-vendor-list-allservices.component.css']
})
export class AVendorListAllservicesComponent implements OnInit {

  users : any;
  id: any;
  constructor(private service : ConnectionService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    // this.service.showallcourses(this.router.snapshot.params.vendorid).subscribe(data =>{
    //   this.users=data;
    //   console.log(this.users);
    // })
  }
  getInfo(){
    //changes required in the connection.ts
    this.service.showallcourses(this.id).subscribe(data =>{
      this.users=data;
      console.log(this.users);
    })

  }

}
