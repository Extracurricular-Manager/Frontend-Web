import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-view',
  templateUrl: './billing-view.component.html',
  styleUrls: ['./billing-view.component.scss']
})
export class BillingViewComponent implements OnInit {

  child = {
    "name":"marc",
    "surname":"michel",
    "classroom":{
      "name":""
    },
    diet:{
      "name":""
    }
  };
  weekAmount: any;
  monthAmount: any;
  totalAmount: any;

  constructor() { }

  ngOnInit(): void {
  }

}
