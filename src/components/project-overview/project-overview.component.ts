import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReCaptcha2Component } from 'ngx-captcha';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit, AfterViewInit {
  constructor(public router: Router) {
  }
  siteKey = '6Ld0NJoUAAAAABxvzEFKiouFUniWfYC8uIUfBeGT';
  public type = 'v3';
  public lang = 'en';
  public theme = 'light';
  public size = 'normal';
  public showWrapper = false;
  ngOnInit() {
    setTimeout(() => {
      document.getElementsByClassName('slick-cloned').length > 0 ? true : window.location.reload();

    }, 100);

  }
  getClass() {
    if (this.router.url === "/alraziq") {
      return "alraziq-wrapper";
    }
    else if (this.router.url === "/project") {
      return "project-wrapper";
    }
    else if (this.router.url === "/upcoming") {
      return "upcoming-wrapper";
    }
    else {
      return "";
    }
  }
  open360Image = () => {
    window.open(`${window.location.origin}/panorama?img=${btoa('bhs')}`);
  }
  ngAfterViewInit() {
    this.showWrapper = true;
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');
    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

    exampleCarousel.setControls();
    exampleCarousel.setNav();
    exampleCarousel.setInitialState();
    exampleCarousel.useControls();
  }
  openFullScreenMode(id: string) {
    const domGrid = document.getElementById(id) as any;
    if (domGrid) {
      domGrid.webkitRequestFullscreen();
    }
  }
}

class Carousel {
  carouselContainer;
  carouselControls;
  carouselArray: any;
  constructor(container: any, items: any, controls: any) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  // Assign initial css classes for gallery and nav items
  setInitialState() {
    this.carouselArray[0].classList.add('gallery-item-first');
    this.carouselArray[1].classList.add('gallery-item-previous');
    this.carouselArray[2].classList.add('gallery-item-selected');
    this.carouselArray[3].classList.add('gallery-item-next');
    this.carouselArray[4].classList.add('gallery-item-last');
    const element: any = document.querySelector('.gallery-nav');
    if (element) {
      element.childNodes[0].className = 'gallery-nav-item gallery-item-first';
      element.childNodes[1].className = 'gallery-nav-item gallery-item-previous';
      element.childNodes[2].className = 'gallery-nav-item gallery-item-selected';
      element.childNodes[3].className = 'gallery-nav-item gallery-item-next';
      element.childNodes[4].className = 'gallery-nav-item gallery-item-last';
    }

  }

  // Update the order state of the carousel with css classes
  setCurrentState(target: any, selected: any, previous: any, next: any, first: any, last: any) {

    selected.forEach((el: any) => {
      el.classList.remove('gallery-item-selected');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-next');
      } else {
        el.classList.add('gallery-item-previous');
      }
    });

    previous.forEach((el: any) => {
      el.classList.remove('gallery-item-previous');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-selected');
      } else {
        el.classList.add('gallery-item-first');
      }
    });

    next.forEach((el: any) => {
      el.classList.remove('gallery-item-next');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-last');
      } else {
        el.classList.add('gallery-item-selected');
      }
    });

    first.forEach((el: any) => {
      el.classList.remove('gallery-item-first');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-previous');
      } else {
        el.classList.add('gallery-item-last');
      }
    });

    last.forEach((el: any) => {
      el.classList.remove('gallery-item-last');

      if (target.className == 'gallery-controls-previous') {
        el.classList.add('gallery-item-first');
      } else {
        el.classList.add('gallery-item-next');
      }
    });
  }

  // Construct the carousel navigation
  setNav() {
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControls = ['previous', 'next'];
    if (galleryContainer) {
      galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';
    }

    this.carouselArray.forEach((item: any) => {
      if (galleryContainer) {
        const nav = galleryContainer.lastElementChild;
        if (nav) {
          nav.appendChild(document.createElement('li'));
        }
      }

    });
  }

  // Construct the carousel controls

  setControls() {

    let galleryControlsContainer = document.querySelector('.gallery-controls');
    this.carouselControls.forEach((control: any) => {
      if (galleryControlsContainer) {
        galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      }
    });
    if (galleryControlsContainer) {
      !!galleryControlsContainer.childNodes[0] ? (galleryControlsContainer.childNodes[0] as any).innerHTML = this.carouselControls[0] : null;
      !!galleryControlsContainer.childNodes[1] ? (galleryControlsContainer.childNodes[1] as any).innerHTML = this.carouselControls[1] : null;
    }

  }

  // Add a click event listener to trigger setCurrentState method to rearrange carousel
  useControls() {
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const triggers = galleryControlsContainer ? galleryControlsContainer.childNodes : [];

    triggers.forEach((control: any) => {
      control.addEventListener('click', () => {
        const target = control;
        const selectedItem = document.querySelectorAll('.gallery-item-selected');
        const previousSelectedItem = document.querySelectorAll('.gallery-item-previous');
        const nextSelectedItem = document.querySelectorAll('.gallery-item-next');
        const firstCarouselItem = document.querySelectorAll('.gallery-item-first');
        const lastCarouselItem = document.querySelectorAll('.gallery-item-last');

        this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
      });
    });
  }
}

