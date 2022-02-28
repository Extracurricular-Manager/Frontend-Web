import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Child} from "../../../api/data/child";
import {ClassroomApiService} from "../../../api/domain-specific/classroom-api.service";
import {Classroom} from "../../../api/data/classroom";

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit {
  @Input() child : Child | undefined;
  @Output() childNameUpdater = new EventEmitter<any>();

  classrooms : Classroom[] | undefined
  monthAmount: any;
  totalAmount: any;
  constructor(private classApi:ClassroomApiService) {
    this.ngOnRefresh()
  }

  ngOnRefresh(){
    this.classApi.getAll().subscribe(t=>{
      this.classrooms = t.body as Classroom[]
    })
  }

  ngOnInit(): void {
    console.log(this)
  }

  update(nval:any){
    this.childNameUpdater.emit(nval)
  }



}
