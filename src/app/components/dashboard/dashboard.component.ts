import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router-animations';
import { Subscriber } from '../../../../node_modules/rxjs';
import { Routes, RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';

enum PageMode {
  NONE = -1,
  aboutMe = 0,
  resume = 1,
  works = 2,
  blog = 3,
  contact = 4
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerTransition]
})
export class DashboardComponent implements OnInit {
  pageMode: PageMode = PageMode.NONE;

  constructor() {
  }

  ngOnInit() {
    this.pageMode = PageMode.aboutMe;
  }

  getState(outlet) {
    if (outlet)
      return outlet.activatedRouteData.state;
  }

  getPageMode(event: PageMode) {
    this.pageMode = event;
  }

}
