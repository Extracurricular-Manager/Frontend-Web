import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BaseApiService} from "../../../api/domain-specific/BaseApiService";
import {FormControl, FormGroup} from "@angular/forms";
import { ClassroomApiService } from 'src/api/domain-specific/classroom-api.service';

@Component({
  selector: 'app-new-class-dialog',
  templateUrl: './new-class-dialog.component.html',
  styleUrls: ['./new-class-dialog.component.scss']
})

export class NewClassDialogComponent implements OnInit {

  classForm = new FormGroup({
    name : new FormControl(''),
    professor: new FormControl(''),
    id: new FormControl('')
  })

  constructor(public dialogRef: MatDialogRef<NewClassDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public api: BaseApiService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              private classApi:ClassroomApiService) { }

  ngOnInit(): void {
  }

  sendClass(){
    this.classApi.sendClassroom(this.classForm.value).subscribe(t=>{
      console.log(t)
    }) 
}
}