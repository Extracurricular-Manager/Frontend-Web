import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Child } from 'src/app/objects/child';

@Component({
  selector: 'app-create-child',
  templateUrl: './create-child.component.html',
  styleUrls: ['./create-child.component.css']
})
export class CreateChildComponent {

  name:string="test";
  surname:string="test";
  constructor(
    public dialogRef: MatDialogRef<CreateChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Child,
    private dialog:MatDialog
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

  createChild(){}
}