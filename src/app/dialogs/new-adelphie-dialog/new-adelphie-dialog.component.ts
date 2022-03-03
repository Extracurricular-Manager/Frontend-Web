import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BaseApiService} from "../../../api/domain-specific/BaseApiService";
import {FormControl, FormGroup} from "@angular/forms";
import { FamilyApiService } from 'src/api/domain-specific/family-api.service';

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
              @Inject(MAT_DIALOG_DATA) public data:any,
              private famApi: FamilyApiService) { }

  ngOnInit(): void {
  }

  sendAdelphia(){
      this.famApi.sendFamily(this.adelphieForm.value).subscribe(t=>{
        console.log(t)
      }) 
}
}