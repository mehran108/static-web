import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideMenuHeader();
      }
    })
  }

  ngOnInit() {
  }
  getClass() {
    if (this.router.url === "/alraziq") {
      return "alraziq";
    }
    else if (this.router.url === "/project") {
      return "project";
    }
    else if (this.router.url === "/upcoming") {
      return "upcoming";
    }
    else {
      return "";
    }
  }

  checkIfToShow() {
    return ["/alraziq", "/project", "/upcoming"].includes(this.router.url);
  }
  hideMenuHeader = () => {
    $(".wrapper").fadeOut("slow");
    $(".wrapper").removeClass("active");
    $(".menu-btn").removeClass("menu-active");
    $(".menu-btn").addClass("menu-inactive");
    $('.overlay').removeClass('active');
  }
}
