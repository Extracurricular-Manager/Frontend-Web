import {AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ComponentType} from "@angular/cdk/overlay";
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import { DialogStepperComponent } from 'src/app/dialog-stepper/dialog-stepper.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


    @Component({
     selector: 'app-modules-view',
     templateUrl: './modules-view.component.html',
     styleUrls: ['./modules-view.component.scss']
    }) 

    export class ModulesViewComponent implements OnInit {
      @Input() newContentDialog : ComponentType<any>
      @Output() shouldRefreshInputData = new EventEmitter();
      @Input() dataset : any[] | undefined
      @Input() selectedItem : any
      
      
  constructor(public dialog: MatDialog) {    
    this.newContentDialog = StepDialog;
  }
      ngOnInit(): void { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    const dialogRef = this.dialog.open(StepDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog2(): void {
    const dialogRef = this.dialog
        .open(this.newContentDialog,
            {
              data:{}
            })
        .afterClosed().subscribe(n=>{
          console.log(n)
              if (n != null) {
                this.dataset?.push(n)
                this.shouldRefreshInputData.emit(true)
                this.selectedItem = n
              }
            }
        )
  }



}

@Component({
  selector: 'step-dialog',
  templateUrl: 'step-dialog.html',
 }) 
 
export class StepDialog{

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }
} 
    

