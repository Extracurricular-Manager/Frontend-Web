import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Adelphie} from "../../api/data/adelphie";
import {MatDialog} from "@angular/material/dialog";
import {ChildDetailsComponent} from "../components/child-details/child-details.component";

@Component({
  selector: 'app-smart-selector',
  templateUrl: './smart-selector.component.html',
  styleUrls: ['./smart-selector.component.scss']
})
export class SmartSelectorComponent implements OnInit {
  @Output() selectedData = new EventEmitter();
  @Input() dataset : any[] | undefined

  edit=false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChildDetailsComponent, {
      data : {
         "id": 0,
         "name": "string",
         "surname": "string",
         "birthday": "2022-02-25",
         "classroom": {
           "id": 0,
           "name": "string",
           "professor": "string"
         },
         "adelphie": {
           "id": 0,
           "referingParentName": "string",
           "referingParentSurname": "string",
           "telephoneNumber": "string",
           "postalAdress": "string"
         },
         "gradeLevel": {
           "id": 0,
           "level": "string"
         },
         "diets": [
           {
             "id": 0,
             "name": "string",
             "description": "string"
           }
         ],
         "facturation": {
           "id": 0,
           "schoolService": "string",
           "cost": 0,
           "payed": true
         }
       }
    }
    );
    dialogRef.afterClosed().subscribe(result => {

      console.log(result.data);
    });
  }

  process(event:any){
    console.log(event)
    if (event === true){
      this.openDialog()
    }
  }

  selection :  | undefined

}
