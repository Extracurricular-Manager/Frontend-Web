import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  weekAmount: number=0;
  monthAmount: number=0;
  totalAmount: number=0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
