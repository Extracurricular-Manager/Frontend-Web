import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Child } from 'src/api/data/child';

@Component({
  selector: 'app-billing-children',
  templateUrl: './billing-children.component.html',
  styleUrls: ['./billing-children.component.scss']
})
export class BillingChildrenComponent implements OnInit {
  @Input() child : Child | undefined;
  @Output() childNameUpdater = new EventEmitter<any>();

  
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
