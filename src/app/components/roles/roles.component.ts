import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

export class permission{
  id:number=-1;
  name:string="";

  constructor(idd:number,nam:string){
    this.id=idd;
    this.name=nam;
  }
}