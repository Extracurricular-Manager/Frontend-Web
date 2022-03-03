import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Child} from "../../../api/data/child";
import {ClassroomApiService} from "../../../api/domain-specific/classroom-api.service";
import {Classroom} from "../../../api/data/classroom";
import { Adelphie } from 'src/api/data/adelphie';
import {NewClassDialogComponent} from "../../dialogs/new-class-dialog/new-class-dialog.component";
import { FamilyApiService } from 'src/api/domain-specific/family-api.service';
import { NewAdelphieDialogComponent } from 'src/app/dialogs/new-adelphie-dialog/new-adelphie-dialog.component';
import { ChildApiService } from 'src/api/domain-specific/child-api.service';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.scss']
})
export class ChildDetailsComponent implements OnInit {
  @Input() child : Child | undefined;
  @Output() childNameUpdater = new EventEmitter<any>();


  ncComp = NewClassDialogComponent
  naComp = NewAdelphieDialogComponent
  classrooms : Classroom[] | undefined;
  adelphie: Adelphie[] | undefined;
  monthAmount: any;
  totalAmount: any;

  selectedClassroom : Classroom | undefined


  constructor(private classApi:ClassroomApiService,
              private childApi:ChildApiService,private famApi: FamilyApiService) {
    this.ngOnRefresh()
  }

  ngOnRefresh(){
    this.classApi.getAll().subscribe(t=>{
      this.classrooms = t.body as Classroom[]
    })
    this.famApi.getAll().subscribe(t=>{
      this.adelphie = t.body as Adelphie[]
      console.log(t)
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
