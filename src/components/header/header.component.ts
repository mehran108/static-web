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
    else if (this.router.url === "/home") {
      return "home";
    }
    else if (this.router.url === "/kallar-kahar") {
      return "kallar-kahar";
    }
    else {
      return "";
    }
  }

  checkIfToShow() {
    return ["/alraziq", "/project"].includes(this.router.url);
  }
  hideMenuHeader = () => {
    $(".wrapper").fadeOut("slow");
    $(".wrapper").removeClass("active");
    $(".menu-btn").removeClass("menu-active");
    $(".menu-btn").addClass("menu-inactive");
    $('.overlay').removeClass('active');
  }
  public scrollIntoView = (id: string) => {
    setTimeout(() => {
      const component = document.getElementById(id.toLowerCase());
      if (component) {
        component.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}

