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
    else if (this.router.url === "/supreme-city") {
      return "supreme-city";
    }
    else if (this.router.url === "/about") {
      return "about";
    }
    else if (this.router.url === "/service") {
      return "service";
    }
    else if (this.router.url === "/lifestyle") {
      return "lifestyle";
    }
    else if (this.router.url === "/dealership") {
      return "dealership";
    }
    else if (this.router.url === "/contact") {
      return "contact";
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
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, arrows: false, autoplay: false};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e:any) {
    console.log('slick initialized');
  }

  breakpoint(e:any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');
  }

  beforeChange(e:any) {
    console.log('beforeChange');
  }
}

