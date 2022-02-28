import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {
  IntentionnalyVoidComponentPleaseDoNotEditThanksComponent
} from "../intentionnaly-void-component-please-do-not-edit-thanks/intentionnaly-void-component-please-do-not-edit-thanks.component";

@Component({
  selector: 'app-smart-selector',
  templateUrl: './smart-selector.component.html',
  styleUrls: ['./smart-selector.component.scss']
})

export class SmartSelectorComponent<T> implements OnInit {
  @Output() shouldRefreshInputData = new EventEmitter();
  @Output() userSelection = new EventEmitter();
  @Input() dataset : any[] | undefined
  @Input() newContentItemString = "Ajouter un élément"
  @Input() newContentDialog : ComponentType<any>
  
  constructor(public dialog: MatDialog) {
    this.newContentDialog = IntentionnalyVoidComponentPleaseDoNotEditThanksComponent
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog
        .open(this.newContentDialog)
        .afterClosed()
  }

  process(event:any){
    console.log(event)
    if (event === true){
      this.openDialog()
    }
  }

  correctlyGenerateName(item:T){
    try {
      // @ts-ignore
      if (!item.hasOwnProperty("name")){
        // @ts-ignore
        return item.referingParentName + " " + referingParentSurname //definitely not a great fix but anyway
      } else {
        // @ts-ignore
        return item.name
      }
    } catch (e){
      console.error(e)
    }
    return undefined
  }

}
