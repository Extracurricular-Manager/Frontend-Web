import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Child } from 'src/app/objects/child';
import { ChildService } from 'src/app/service/child-service.service';
import { ClassroomService } from 'src/app/service/classroom-service.service';
import SampleJson from '../../../../examples/child.json';
import { CreateChildComponent } from './create-child/create-child.component';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.css']
})
export class ChildrenListComponent implements OnInit {

  classroom:string="";
  list:Child[]=[];

  constructor(private serviceClassroom:ClassroomService,private serviceChild:ChildService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
    this.serviceClassroom.currentClassroom.subscribe(
      data=>{
        console.log("currentClassroom="+this.classroom);
        this.classroom=data;
        console.log("currentClassroom after update="+this.classroom);
        this.updateList();
      }
    )
  }

  getListOfChildren(child:number){
    this.serviceChild.updateCurrentChildId(child+1);
  }


  updateList(){
    this.list=[];
    for (let i = 1; i <= SampleJson.length; i++) {
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

  createChild(){
    const createChildRef=this.dialog.open(CreateChildComponent, {
      width: '250px',
      data: {}
    });

    createChildRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}

