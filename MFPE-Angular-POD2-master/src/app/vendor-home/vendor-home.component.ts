import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-home',
  templateUrl: './vendor-home.component.html',
  styleUrls: ['./vendor-home.component.css']
})
export class VendorHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("From V Home: "+localStorage.getItem('VendorUserId'));
  }

}
