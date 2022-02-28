import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Child} from "../../../api/data/child";
import {BaseApiService} from "../../../api/domain-specific/BaseApiService";

@Component({
  selector: 'app-new-class-dialog',
  templateUrl: './new-class-dialog.component.html',
  styleUrls: ['./new-class-dialog.component.scss']
})
export class NewClassDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewClassDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public api: BaseApiService) { }

  ngOnInit(): void {
  }




  send(){

  }

}
