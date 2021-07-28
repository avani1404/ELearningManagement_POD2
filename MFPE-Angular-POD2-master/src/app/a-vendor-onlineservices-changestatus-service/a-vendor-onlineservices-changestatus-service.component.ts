import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-a-vendor-onlineservices-changestatus-service',
  templateUrl: './a-vendor-onlineservices-changestatus-service.component.html',
  styleUrls: ['./a-vendor-onlineservices-changestatus-service.component.css']
})
export class AVendorOnlineservicesChangestatusServiceComponent implements OnInit {

  constructor(private service1 : ConnectionService,private router: Router) { }

  status:any;
  service:any;
  vid:any;
  services=[
    {id:1, name:"Asynchronous Learning"},
    {id:2, name:"Webinars"},
    {id:3, name:"Online Tests"}
  ];

  ngOnInit(): void {
  }

  res:any;
  onSubmit(){
    this.vid=1;
    console.log(this.vid);
    console.log(this.service);
    console.log(this.status);    
    let reponse = this.service1.updateServiceStatus(this.vid,this.service,this.status);
    reponse.subscribe(data => {
      this.res = data;
    });
    console.log(this.res);
    if (this.res =="updated")
    {
      this.router.navigate(['/a_layout/sucessful_updation_a']); 
    }
    

  }

}
