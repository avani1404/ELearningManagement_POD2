import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  termination(){
    console.log("Bubieee!!!!");
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    this.router.navigate(['landing_page']);
  }

}
