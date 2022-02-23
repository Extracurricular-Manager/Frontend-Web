import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'FrontendDesktop';
  menuItems = [
    ["Accueil", "/home"],
    ["Enfants", "/children"],
    ["Tarifs", "/pricing"],
    ["Facturation", "/billing"],
    ["Services", "/modules"],

  ]

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  logoutAction(){
    this.api.logoutAndDropToken()
  }

}
