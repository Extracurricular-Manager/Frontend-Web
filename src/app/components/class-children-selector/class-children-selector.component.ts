import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChildApiService} from "../../../api/domain-specific/child-api.service";

@Component({
  selector: 'app-class-children-selector',
  templateUrl: './class-children-selector.component.html',
  styleUrls: ['./class-children-selector.component.scss']
})
export class ClassChildrenSelectorComponent implements OnInit {
  showAdelphie= false;
  @Output() data = new EventEmitter<any>();
  @Input() currdata : any;
  childrenList: any;
  constructor(private capi:ChildApiService) {

    capi.getAll().subscribe(t=>{
      this.childrenList = t.body
    })

  }

  ngOnInit(): void {

  }

}
