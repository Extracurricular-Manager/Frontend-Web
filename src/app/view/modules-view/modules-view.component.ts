import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ChildApiService } from 'src/api/domain-specific/child-api.service';
import { ClassroomApiService } from 'src/api/domain-specific/classroom-api.service';
import { Child } from 'src/api/data/child';
//import { DialogStepperComponent } from 'src/app/dialog-stepper/dialog-stepper.component';



export interface DayNursery {
Date: string,
Nom: string,
Prénom: string,
//Présence: ,
HeureArrivee: string,
HeureDepart: string
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const CHILD_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
];

const DATES: string[] = [];
const NAMES: string[] = [];
const SURNAMES: string[] = [];
const ARRIVING: string[] = [];
const DEPARTURES: string[] = []

    @Component({
     selector: 'app-modules-view',
     templateUrl: './modules-view.component.html',
     styleUrls: ['./modules-view.component.scss']
    }) 

    export class ModulesViewComponent implements OnInit {
     // @Input() newContentDialog : ComponentType<any>
      @Output() shouldRefreshInputData = new EventEmitter();
      childrenList: Child[] | undefined;
      @Input() dataset : any[] | undefined;
      @Input() selectedItem : any;
      @Input() itemsToList : any;
      
      
  constructor(private chilApi:ChildApiService, private classApi:ClassroomApiService,) {    
    //this.newContentDialog = StepDialog;
  }
      ngOnInit(): void { 
        this.getChilds();
        this.addToTab();
      }
     

  displayedColumns2: string[] = ['Date', 'Nom', 'Prénom', 'Présence',"Heure d'arrivée", 'Heure de départ'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(CHILD_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getChilds(){
    if (this.chilApi){
      this.chilApi.getAll().subscribe(t=>{
        this.childrenList = t.body as Child[];
        this.addToTab();
      console.log(t.body);
      })
    }
    console.log("HEY : " + this.childrenList);
  }

  addToTab() {   
/*     CHILD_DATA.push(this.childrenList);
    console.log("CHILD");
    console.log(CHILD_DATA);
    DATES.push(this.childrenList) */
    console.log("WESH");

    this.childrenList!.forEach((child: Child) => {
 /*      if(child.periodModel)
      DATES.push((child.periodModel)) */
      console.log("LOG"); 

      if(child.name)
        NAMES.push(child.name)
      
        console.log(child.name)
    });
  }

}


    

