import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Child } from 'src/app/objects/child';
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
  child:Child=new Child(
    Number(SampleJson.id),
    SampleJson.name,
    SampleJson.surname,
    SampleJson.adelphie,
    SampleJson.birthday,
    SampleJson.classroom,
    SampleJson.diet,
    SampleJson.gradelevel
  );

  
  constructor() { }

  ngOnInit(): void {
  }

}
