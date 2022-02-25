import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChildApiService} from "../../../api/domain-specific/child-api.service";
import {ClassroomApiService} from "../../../api/domain-specific/classroom-api.service";
import {Classroom} from "../../../api/data/classroom";
import {FamilyApiService} from "../../../api/domain-specific/family-api.service";

@Component({
  selector: 'app-class-children-selector',
  templateUrl: './class-children-selector.component.html',
  styleUrls: ['./class-children-selector.component.scss']
})
export class ClassChildrenSelectorComponent implements OnInit {
  @Output() selectedItem = new EventEmitter<any>();
  @Input() itemsToList : any;
  showAdelphie= false;
  childrenList: any;
  selectedClassroom : Classroom | undefined;
  classesList: Classroom[] = [];
  constructor(private chilApi:ChildApiService,
              private classApi:ClassroomApiService,
              private famApi:FamilyApiService) {
    this.refreshClasssesList()
    this.refreshChildrenList()
  }

  refreshChildrenList(){

    if (this.selectedClassroom){
      this.classApi.getChildren(this.selectedClassroom.id!).subscribe(t=>{
        this.childrenList = []
        this.childrenList = t.body;
      })
    } else {
      if(this.showAdelphie){
        this.famApi.getAll().subscribe(t=>{
          this.childrenList = []
          this.childrenList = t.body;
        })
      } else {
      this.chilApi.getAll().subscribe(t=>{
        this.childrenList = []
        this.childrenList = t.body;
      })
      }
    }
  }

  refreshClasssesList(){
    this.classApi.getAll().subscribe(t=>{
      if(t.body){
        this.classesList = t.body as Classroom[];
      }
    })
  }

  ngOnInit(): void {

  }

  onPillSelectorUpdate(){
    this.selectedClassroom = undefined;
    this.selectedItem.emit()
    this.refreshChildrenList()
  }

  onClassroomSelectorUpdate(sent:Classroom){
    console.log("hello there")
    //this.selectedItem.emit(sent);
    this.selectedClassroom = sent;
    this.refreshChildrenList()
  }

}
