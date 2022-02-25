import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Child} from "../../../../api/data/child";
import {Family} from "../../../../api/data/family";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  @Output() chold = new EventEmitter<any>();
  @Input() itemsList : Child[] | undefined;
  @Input() value : Child | undefined;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.value = undefined
  }

  displayCorrectName(item : Child | Family){
    let result =  item.hasOwnProperty("name") ? this.getChildName(item) : this.getFamilyReferentName(item)
    console.log(result)
    return result
  }


  getChildName(ch : Child){
    return ch.name + " " + ch.surname
  }


  getFamilyReferentName(f : Family){
    return f.referingParentName  + " " + f.referingParentSurname
  }

}
