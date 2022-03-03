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
  @Input() noSelectionItemString : string | undefined
  @Input() itemName : string | undefined
  @Input() newContentItemString = "Ajouter un élément"
  @Input() newContentDialog : ComponentType<any>
  @Input() selectedItem : any

  constructor(public dialog: MatDialog) {
    this.newContentDialog = IntentionnalyVoidComponentPleaseDoNotEditThanksComponent
  }

  ngOnInit(): void {

    if(this.selectedItem.hasOwnProperty("id")) this.selectedItem = this.selectedItem.id

  }

  openDialog(): void {
    const dialogRef = this.dialog
        .open(this.newContentDialog,
            {
              data:{}
            })
        .afterClosed().subscribe(n=>{
          console.log(n)
              if (n != null) {
                this.dataset?.push(n)
                this.shouldRefreshInputData.emit(true)
                this.selectedItem = n
              }
            }
        )
  }

saveSelection(sel :any){
    this.selectedItem = sel.id
  this.userSelection.emit(sel)
}

  correctlyGenerateName(item:T){
    
    try {
      // @ts-ignore
      if (item && !item.hasOwnProperty("name") ){
        console.log(item)
        // @ts-ignore
        return item.referingParentName + " " + item.referingParentSurname //definitely not a great fix but anyway
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
