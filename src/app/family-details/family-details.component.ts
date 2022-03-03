import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Adelphie } from 'src/api/data/adelphie';

@Component({
  selector: 'app-family-details',
  templateUrl: './family-details.component.html',
  styleUrls: ['./family-details.component.scss']
})
export class FamilyDetailsComponent implements OnInit {
@Input() adelphie : Adelphie | undefined;
@Output() adelphieNameUpdater = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
