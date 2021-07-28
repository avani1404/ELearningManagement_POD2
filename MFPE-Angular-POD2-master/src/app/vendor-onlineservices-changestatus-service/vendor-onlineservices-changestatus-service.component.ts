import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-vendor-onlineservices-changestatus-service',
  templateUrl: './vendor-onlineservices-changestatus-service.component.html',
  styleUrls: ['./vendor-onlineservices-changestatus-service.component.css']
})
export class VendorOnlineservicesChangestatusServiceComponent implements OnInit {

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
    this.vid=localStorage.getItem('VendorUserId');;
    console.log(this.vid);
    console.log(this.service);
    console.log(this.status);    
    let reponse = this.service1.updateServiceStatus(this.vid,this.service,this.status);
    alert("updated sucessfully!!");
    this.router.navigate(['/v_layout/vendor_onlineservices_changestatus']);   
    reponse.subscribe(data => {
      this.res = data;
    });
    console.log(this.res);
    if (this.res =="updated")
    {
    this.router.navigate(['/v_layout/sucessful_updation_v']); 
    }
  }
}
