import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
