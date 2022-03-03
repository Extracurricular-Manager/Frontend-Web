import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BaseApiService} from "../../../api/domain-specific/BaseApiService";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-adelphie-dialog',
  templateUrl: './new-adelphie-dialog.component.html',
  styleUrls: ['./new-adelphie-dialog.component.scss']
})
export class NewAdelphieDialogComponent implements OnInit {

  adelphieForm = new FormGroup({
    referingParentName : new FormControl(''),
    referingParentSurname: new FormControl(''),
    telephoneNumber: new FormControl(''),
    postalAdress: new FormControl('')
  })

  constructor(public dialogRef: MatDialogRef<NewAdelphieDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public api: BaseApiService,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.adelphieForm)
    console.log(this.adelphieForm.value)
    this.data = this.adelphieForm.value
    this.data.id = 88 //todo : parler avec le back, envoyer le nouvel objet et intégrer la réponse dans l'objet.id
    console.log(this.data)
    return this.data
  }
}