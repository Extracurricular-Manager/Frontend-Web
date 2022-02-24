import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Child} from "../../../../api/data/child";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  @Output() chold = new EventEmitter<any>();
  @Input() itemsList : Child[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
