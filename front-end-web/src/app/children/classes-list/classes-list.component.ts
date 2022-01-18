import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})
export class ClassesListComponent implements OnInit {

  classes:string[] = ["CP","CE1-CE2","CM1-CM2"];
  constructor() { }

  ngOnInit(): void {
  }

}
