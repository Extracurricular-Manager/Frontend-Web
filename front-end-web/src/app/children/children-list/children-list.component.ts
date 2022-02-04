import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.css']
})
export class ChildrenListComponent implements OnInit {

  list:string[]=["Guillaume","Guewen","Alban","Guillaume","Guewen","Alban","Guillaume","Guewen","Alban","Guillaume","Guewen","Alban","Guillaume","Guewen","Alban",
  "Guillaume","Guewen","Alban","Guillaume","Guewen","Alban","Guillaume","Guewen","Alban",];


  constructor() { }

  ngOnInit(): void {
  }

  getListOfChildren(child:string){
    
  }

}
