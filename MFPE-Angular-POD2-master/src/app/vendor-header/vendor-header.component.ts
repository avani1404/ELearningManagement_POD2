import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-header',
  templateUrl: './vendor-header.component.html',
  styleUrls: ['./vendor-header.component.css']
})
export class VendorHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  termination(){
    console.log("Bubieee!!!!");
    localStorage.removeItem('VendorUserId');
    localStorage.removeItem('role');
    this.router.navigate(['landing_page']);
  }

}
