import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BaseApiService} from "../../../api/domain-specific/BaseApiService";
import {FormControl, FormGroup} from "@angular/forms";

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
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.classForm)
    console.log(this.classForm.value)
    this.data = this.classForm.value
    this.data.id = 88 //todo : parler avec le back, envoyer le nouvel objet et intégrer la réponse dans l'objet.id
    console.log(this.data)
    return this.data
  }
}