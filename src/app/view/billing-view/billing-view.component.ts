import { Component, OnInit } from '@angular/core';
import { Child } from 'src/api/data/child';

@Component({
  selector: 'app-billing-view',
  templateUrl: './billing-view.component.html',
  styleUrls: ['./billing-view.component.scss']
})
export class BillingViewComponent implements OnInit {

  val: Child | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
