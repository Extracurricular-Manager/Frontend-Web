import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/objects/child';
import { ClassroomService } from 'src/app/service/classroom-service.service';
import SampleJson from '../../../../examples/child.json'

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.css']
})
export class ChildrenListComponent implements OnInit {

  classroom:string="";
  list:Child[]=[];

  constructor(private service:ClassroomService) { }

  ngOnInit(): void {
    this.service.currentClassroom.subscribe(
      data=>{
        console.log("currentClassroom="+this.classroom);
        this.classroom=data;
        console.log("currentClassroom after update="+this.classroom);
        this.updateList();
      }
    )
  }

  getListOfChildren(child:number){
    
  }

  updateList(){
    this.list=[];
    for (let i = 0; i < SampleJson.length; i++) {
      console.log("child classroom="+SampleJson[i].classroom.name+
      "  "+"current classroom="+this.classroom);
      if(SampleJson[i].classroom.name==this.classroom){
        this.list.push(new Child(
            Number(SampleJson[i].id),
            SampleJson[i].name,
            SampleJson[i].surname,
            SampleJson[i].adelphie,
            SampleJson[i].birthday,
            SampleJson[i].classroom,
            SampleJson[i].diet,
            SampleJson[i].gradelevel
          )
        );
      }
    }

  }

}
