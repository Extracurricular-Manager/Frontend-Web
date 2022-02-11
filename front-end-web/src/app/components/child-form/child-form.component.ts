import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Child } from 'src/app/objects/child';
import { ChildService } from 'src/app/service/child-service.service';
import SampleJson from '../../../../examples/child.json';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  weekAmount: number=0;
  monthAmount: number=0;
  totalAmount: number=0;
  childId:number=0;
  child:Child=new Child(
    Number(SampleJson[this.childId].id),
    SampleJson[this.childId].name,
    SampleJson[this.childId].surname,
    SampleJson[this.childId].adelphie,
    SampleJson[this.childId].birthday,
    SampleJson[this.childId].classroom,
    SampleJson[this.childId].diet,
    SampleJson[this.childId].gradelevel
  );



  constructor(private childService:ChildService) { }

  ngOnInit(): void {
    this.childService.currentChild.subscribe(
      data=>{
        this.childId=data;
        this.updateChild();
      }
    )
  }

  updateChild(){
    this.child=new Child(
      Number(SampleJson[this.childId].id),
      SampleJson[this.childId].name,
      SampleJson[this.childId].surname,
      SampleJson[this.childId].adelphie,
      SampleJson[this.childId].birthday,
      SampleJson[this.childId].classroom,
      SampleJson[this.childId].diet,
      SampleJson[this.childId].gradelevel
    );

  }
}
