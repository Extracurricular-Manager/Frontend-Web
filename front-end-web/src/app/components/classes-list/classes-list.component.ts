import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/objects/classroom';
import { ClassroomService } from 'src/app/service/classroom.service';
import SampleJson from '../../../../examples/classes.json'

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
/*    this.classroomService.getAll().subscribe(
      data=>{this.classroomField=data}
    );
*/


    this.classroomField=[];
    console.log(SampleJson.length);
    for(var i=0; i<SampleJson.length; i++){
      console.log("name:"+SampleJson[i].name+" prof="+SampleJson[i].prof);
      this.classroomField.push(new Classroom(Number(SampleJson[i].id),SampleJson[i].name,SampleJson[i].prof));
    }
    this.classroomToList();
    console.log(this.classroomField);
}

  currentClass(c:string){
    this.classroomService.updateCurrentClassroom(c);
    this.classroomService.currentClassroom.subscribe(
      data=>(console.log("valeur="+data))
    );
  }

  classroomToList(){
    for(let c of this.classroomField){
      this.classroomList.push(c.name as unknown as string);
    }
  }
}
