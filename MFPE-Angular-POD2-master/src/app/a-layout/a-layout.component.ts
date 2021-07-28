import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-layout',
  templateUrl: './a-layout.component.html',
  styleUrls: ['./a-layout.component.css']
})
export class ALayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Printing session data"+sessionStorage.getItem('userId'));
  }

}
