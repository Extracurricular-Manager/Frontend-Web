import {AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ComponentType} from "@angular/cdk/overlay";
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-stepper',
  templateUrl: './dialog-stepper.component.html',
  styleUrls: ['./dialog-stepper.component.scss']
})
export class DialogStepperComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
