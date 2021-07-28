import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-a-vendor-orderhistory',
  templateUrl: './a-vendor-orderhistory.component.html',
  styleUrls: ['./a-vendor-orderhistory.component.css']
})
export class AVendorOrderhistoryComponent implements OnInit {

  id:any;
  purchase:any;
  constructor(private service : ConnectionService) { }

  ngOnInit(): void {
  }
  getInfo(){
    let response = this.service.getPurchaseDetailsByVendorId(this.id);
    response.subscribe(data =>
        this.purchase = data
      );
  }

}
