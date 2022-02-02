import { Component, OnInit } from '@angular/core';
import { serviceTarif } from './serviceTarif';
import SampleJson from '../../../examples/criteres_tarification.json';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  tarifServ:Array<serviceTarif>=[];


  constructor() {
    console.log(SampleJson);
    this.parseJSON(SampleJson);
  }


  ngOnInit(): void {
    //Todo: demander au backend l objet json
  }


  parseJSON(json:any):void{
    var serv:serviceTarif=new serviceTarif();
    serv.name=json["name"];
    this.tarifServ.push(serv);
  }

}

/*
SAVE DE L ANCIENNE VERSION _ _
                           |-|
<div class="rootDiv">
    <div class="tarifDiv">
        <p class="title">Tarifs</p>
        <div class="inputContainer">

            <mat-form-field appearance="fill" class="inputDiv">
                <mat-label>Garderie (Matin)</mat-label>
                <input type="number" name="garderieMatin" min="0" matInput />
            </mat-form-field>

            <mat-form-field appearance="fill" class="inputDiv">
                <mat-label>Cantine</mat-label>
                <input type="number" name="cantine" min="0" matInput />
            </mat-form-field>

            <mat-form-field appearance="fill" class="inputDiv">
                <mat-label>Garderie (Soir)</mat-label>
                <input type="number" name="garderieSoir" min="0" matInput />
            </mat-form-field>

            <mat-form-field appearance="fill" class="inputDiv">
                <mat-label>Centre de loisirs</mat-label>
                <input type="number" name="centreDeLoisir" min="0" matInput />
            </mat-form-field>

        </div>

        <button mat-raised-button class="submitBut">
            Valider
        </button>
    </div>
</div>
*/