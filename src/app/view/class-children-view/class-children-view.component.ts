import { Component, OnInit } from '@angular/core';
import {Child} from "../../../api/data/child";

@Component({
  selector: 'app-class-children-view',
  templateUrl: './class-children-view.component.html',
  styleUrls: ['./class-children-view.component.scss']
})
export class ClassChildrenViewComponent implements OnInit {

  val: Child | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setName(val:any){
    this.val = val
    console.log(val)
  }

}
