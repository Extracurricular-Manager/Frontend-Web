import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Child} from "../../../api/data/child";

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit {
  @Input() child : Child | undefined;
  @Output() childNameUpdater = new EventEmitter<any>();
  weekAmount: any;
  monthAmount: any;
  totalAmount: any;
  constructor() { }

  ngOnInit(): void {
  }

  update(nval:any){
    this.childNameUpdater.emit(nval)
  }

}
