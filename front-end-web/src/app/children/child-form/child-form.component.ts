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
    Number(SampleJson[0].id),
    SampleJson[0].name,
    SampleJson[0].surname,
    SampleJson[0].adelphie,
    SampleJson[0].birthday,
    SampleJson[0].classroom,
    SampleJson[0].diet,
    SampleJson[0].gradelevel
  );

  
  constructor() { }

  ngOnInit(): void {
  }

}
