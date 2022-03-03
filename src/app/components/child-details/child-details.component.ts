import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Child} from "../../../api/data/child";
import {ClassroomApiService} from "../../../api/domain-specific/classroom-api.service";
import {Classroom} from "../../../api/data/classroom";
import {NewClassDialogComponent} from "../../dialogs/new-class-dialog/new-class-dialog.component";
import {ChildApiService} from "../../../api/domain-specific/child-api.service";

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit {
  @Input() child : Child | undefined;
  @Output() childNameUpdater = new EventEmitter<any>();


  ncComp = NewClassDialogComponent
  classrooms : Classroom[] | undefined
  monthAmount: any;
  totalAmount: any;

  selectedClassroom : Classroom | undefined

  constructor(private classApi:ClassroomApiService,
              private childApi:ChildApiService) {
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

  sendToBackend(){
    console.log(this.child)
    if(this.child)
      this.childApi.sendChild(this.child).subscribe(t=>{
        console.log(t)
      })
  }

}
