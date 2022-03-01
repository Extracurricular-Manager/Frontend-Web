import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-intentionnaly-void-component-please-do-not-edit-thanks',
  templateUrl: './intentionnaly-void-component-please-do-not-edit-thanks.component.html',
  styleUrls: ['./intentionnaly-void-component-please-do-not-edit-thanks.component.scss']
})
export class IntentionnalyVoidComponentPleaseDoNotEditThanksComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

}
