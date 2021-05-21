import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor(public router: Router,
            public titleService: Title,
            public meta: Meta) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hideMenuHeader();
      }
    })
  }
  ngAfterViewInit() {
    this.setPageTitle()
  }

  ngOnInit() {
  }

  

  setPageTitle(){
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
    if (this.router.url === "/home") {
      this.titleService.setTitle('Real estate developers');
      this.meta.updateTag({ name: 'description', content: 'Bismillah Developers Is One Of The Pioneers In Real Estate Developers Industry Of Pakistan - Where Our Passion Has Led Us To Provide Modern Residential Living To People Of Pakistan.' });
    } 
    else if (this.router.url === "/project") {
      this.titleService.setTitle('New housing society in Lahore');
      this.meta.updateTag({ name: 'description', content: 'Bismillah developers present new housing society in lahore. Where Our Passion Has Led Us To Provide Modern Residential Living To People Of Pakistan | Setting Examples With New housing society in Lahore Like Bismillah Housing Society Phase 1 Having State Of The Art Luxurious Amenities.' });
    }
    else if (this.router.url === "/alraziq") {
      this.titleService.setTitle('Al raziq garden housing scheme ');
      this.meta.updateTag({ name: 'description', content: 'Al Raziq Garden a Luxury society with affordable living. Al Raziq Garden provides luxury amenities uniquely designed for family living located near faizpur interchange.' });
    }
    else{
      this.titleService.setTitle('Bismillah Developers');
      this.meta.updateTag({ name: 'description', content: 'Bismillah Developers' });
    }
  }});

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
}

