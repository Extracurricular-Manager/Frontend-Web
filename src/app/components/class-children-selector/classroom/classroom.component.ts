import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Classroom} from "../../../../api/data/classroom";
import {Child} from "../../../../api/data/child";
import {Adelphie} from "../../../../api/data/adelphie";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.scss']
})
export class ClassroomComponent implements OnInit {

  @Output() selectedClassroom = new EventEmitter<Classroom>();

  @Input() ItemsList : Classroom[] = []

  @Input() value : any;

  constructor() { }

  ngOnInit(): void {
  }

}
