import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit {
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
