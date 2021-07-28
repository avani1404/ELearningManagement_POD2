import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-vendor-orderhistory',
  templateUrl: './vendor-orderhistory.component.html',
  styleUrls: ['./vendor-orderhistory.component.css']
})
export class VendorOrderhistoryComponent implements OnInit {

  purchase:any;
  id:any;
  constructor(private service : ConnectionService) { }

  ngOnInit(): void {
    this.id=localStorage.getItem('VendorUserId');
    let response = this.service.getPurchaseDetailsByVendorId(this.id);
    response.subscribe(data =>
        this.purchase = data
      );
  }

}
