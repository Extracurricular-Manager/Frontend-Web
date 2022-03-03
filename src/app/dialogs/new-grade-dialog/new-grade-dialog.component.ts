import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BaseApiService} from "../../../api/domain-specific/BaseApiService";
import {FormControl, FormGroup} from "@angular/forms";
import { GradeApiService } from 'src/api/domain-specific/grade-api.service';

@Component({
  selector: 'app-new-grade-dialog',
  templateUrl: './new-grade-dialog.component.html',
  styleUrls: ['./new-grade-dialog.component.scss']
})
export class NewGradeDialogComponent implements OnInit {

  gradeForm = new FormGroup({
    level : new FormControl(''),

  })

  constructor(public dialogRef: MatDialogRef<NewGradeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public api: BaseApiService,
              @Inject(MAT_DIALOG_DATA) public data:any,
              private gradeApi:GradeApiService) { }

  ngOnInit(): void {
  }

  sendGrade(){
    this.gradeApi.sendClassroom(this.gradeForm.value).subscribe(t=>{
      console.log(t)
    }) 
  }

}
