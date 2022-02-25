import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-view',
  templateUrl: './settings-view.component.html',
  styleUrls: ['./settings-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingsViewComponent implements OnInit {
  
  routePath="settings";//Le chemin de ce composant

  constructor(public router: Router) {
    
  }
  ngOnInit(): void {

  }

}
