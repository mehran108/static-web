import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animations, buildRouteTransition } from 'ngx-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger("routeAnimation", [
  //     buildRouteTransition({
  //       stateChangeExpr: "* => *",
  //       enter: animations.fadeIn(1500),
  //       leave: animations.fadeOut(1000)
  //     })
  //   ])
  // ]
})

export class AppComponent implements OnInit {
  constructor(public router: Router) { }
  get panoramaImage() {
    return this.router.url.indexOf('panorama') > -1;
  }
  ngOnInit() {
  }

}

