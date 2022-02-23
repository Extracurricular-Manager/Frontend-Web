import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit {

  constructor(
    private router: Router,) { }

  ngOnInit(): void {
  }

  route(path: string) {
    this.router.navigate([path]);
  }
}
