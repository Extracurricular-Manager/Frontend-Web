import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/objects/classroom';
import { ClassroomService } from 'src/app/service/classroom-service.service';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  classroomField:Classroom[]=[];
  classroomList:string[]=[];
  constructor(private classroomService:ClassroomService) { }

  ngOnInit() {
    this.classroomService.getAll().subscribe(
      data=>{this.classroomField=data}
    );
    this.classroomToList;
  }

  currentClass(c:string){
    this.classroomService.updateCurrentClass(c);
  }

  classroomToList(){
    for(let c of this.classroomField){
      this.classroomList.push(c.name);
    }
  }
}
