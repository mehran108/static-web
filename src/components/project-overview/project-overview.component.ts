import { AfterViewInit, Component, OnInit } from '@angular/core';
var data = {
  "scenes": [
    {
      "id": "oriente-station",
      "name": "Oriente Station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.12678386676067,
          "pitch": -0.0076340532339251865,
          "rotation": 0,
          "target": "electricity-museum"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.00038049728702915786,
          "pitch": 0.014985751462495145,
          "title": "Oriente Station",
          "text": "The Oriente Station is one of the most important bus and train stations in the city. Designed by the Spanish architect and engineer Santiago Calatrava, it has an enormous metal skeleton that covers the eight train lines and its platforms. Finished in 1998 to serve the Expo’98 and, later, the Parque das Nações area, in its surroundings are companies, services, hotels, bars, animation, as well as the well known Vasco da Gama shopping centre."
        }
      ]
    },
    {
      "id": "electricity-museum",
      "name": "Electricity Museum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3152585099587224,
          "pitch": 0.045251205931975846,
          "rotation": 5.497787143782138,
          "target": "jeronimos"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1606464893205768,
          "pitch": -0.17433292221669205,
          "title": "Boilers Room",
          "text": "In the impressive Boilers Room at the Electricity Museum we find four large boilers of about 100 feet tall, with their respective control panels, air and fuel circuits, ventilators, etc. Boiler number 15 has been musealised and visitors may go in and discover its structure and internal component: conveyor belt, Bailey walls, naphtha burners, water heating tubes, and so on."
        }
      ]
    },
    {
      "id": "jeronimos",
      "name": "Jerónimos Monastery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.775981148319735,
          "pitch": 0.2661802812323746,
          "rotation": 0,
          "target": "oriente-station"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5350080558065997,
          "pitch": 0.24525106321929435,
          "title": "Jerónimos Monastery",
          "text": "The Jerónimos Monastery cloister is a pleasant and serene place intended to foster monks’ prayers and meditation. Its manuelin decoration features decorative religious, nautical and royal elements, as well as vegetal motifs. Since 1985, the tomb of the poet Fernando Pessoa rests in the north wing of the cloister’s ground floor."
        }
      ]
    }
  ],
  "name": "Sample Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
}

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss']
})
export class ProjectOverviewComponent implements OnInit, AfterViewInit {
  ngOnInit() {

  }
  ngAfterViewInit() {
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

