import { Component, EventEmitter, Input, OnInit, Output, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Child } from 'src/api/data/child';
import { BillingApiService } from 'src/api/domain-specific/billing-api.service';


@Component({
  selector: 'app-billing-children',
  templateUrl: './billing-children.component.html',
  styleUrls: ['./billing-children.component.scss']
})
export class BillingChildrenComponent implements OnInit {
  @Input() child : Child | undefined;
  @Output() childNameUpdater = new EventEmitter<any>();
   ymVal : string | undefined; 


  constructor(private billApi:BillingApiService) { }

 


  sendToBackend(){
    //console.log(this.child)
    this.ymVal = (<HTMLInputElement>document.getElementById("ymVal")).value;
    console.log("YM");
    console.log(this.ymVal)
    if(this.child && this.ymVal){
      console.log(this.child.id)
      console.log(this.ymVal)
       this.billApi.getOneChildDetailDateData(this.child.id!,this.ymVal!); 
    }
  }


  ngOnInit(): void {
  }

}
