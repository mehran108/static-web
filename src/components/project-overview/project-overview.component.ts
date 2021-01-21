import { Component, OnInit } from '@angular/core';
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
export class ProjectOverviewComponent implements OnInit {

  ngOnInit() {
    // Grab elements from DOM.
    var panoElement = document.querySelector('#pano') as any;
    var sceneNameElement = document.querySelector('#titleBar .sceneName') as any;
    var sceneListElement = document.querySelector('#sceneList') as any;
    var sceneElements = document.querySelectorAll('#sceneList .scene') as any;
    var sceneListToggleElement = document.querySelector('#sceneListToggle') as any;
    var autorotateToggleElement = document.querySelector('#autorotateToggle') as any;
    var fullscreenToggleElement = document.querySelector('#fullscreenToggle') as any;

    // Detect desktop or mobile mode.
    if ((window as any).matchMedia) {
      var setMode = function () {
        if (mql.matches) {
          document.body.classList.remove('desktop');
          document.body.classList.add('mobile');
        } else {
          document.body.classList.remove('mobile');
          document.body.classList.add('desktop');
        }
      };
      var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
      setMode();
      mql.addListener(setMode);
    } else {
      document.body.classList.add('desktop');
    }

    // Detect whether we are on a touch device.
    document.body.classList.add('no-touch');
    window.addEventListener('touchstart', function () {
      document.body.classList.remove('no-touch');
      document.body.classList.add('touch');
    });

    // Use tooltip fallback mode on IE < 11.
    // if (bowser && bowser.msie && parseFloat(bowser.version) < 11) {
    //   document.body.classList.add('tooltip-fallback');
    // }

    // Viewer options.
    var viewerOpts = {
      controls: {
        mouseViewMode: data.settings.mouseViewMode
      }
    };

    // Initialize viewer.
    var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

    // Create scenes.
    var scenes = data.scenes.map(function (data) {
      var urlPrefix = "//www.marzipano.net/media";
      var source = Marzipano.ImageUrlSource.fromString(
        urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
        { cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" });
      var geometry = new Marzipano.CubeGeometry(data.levels);

      var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
      var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

      var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true
      });

      // Create link hotspots.
      data.linkHotspots.forEach(function (hotspot) {
        var element = createLinkHotspotElement(hotspot);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      // Create info hotspots.
      data.infoHotspots.forEach(function (hotspot) {
        var element = createInfoHotspotElement(hotspot);
        scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
      });

      return {
        data: data,
        scene: scene,
        view: view
      };
    });

    // Set up autorotate, if enabled.
    var autorotate = Marzipano.autorotate({
      yawSpeed: 0.03,
      targetPitch: 0,
      targetFov: Math.PI / 2
    });
    if (data.settings.autorotateEnabled) {
      autorotateToggleElement.classList.add('enabled');
    }

    // Set handler for autorotate toggle.
    autorotateToggleElement.addEventListener('click', toggleAutorotate);

    // Set up fullscreen mode, if supported.
    if (screenfull.enabled && data.settings.fullscreenButton) {
      document.body.classList.add('fullscreen-enabled');
      fullscreenToggleElement.addEventListener('click', function () {
        screenfull.toggle();
      });
      screenfull.on('change', function () {
        if (screenfull.isFullscreen) {
          fullscreenToggleElement.classList.add('enabled');
        } else {
          fullscreenToggleElement.classList.remove('enabled');
        }
      });
    } else {
      document.body.classList.add('fullscreen-disabled');
    }

    // Set handler for scene list toggle.
    sceneListToggleElement.addEventListener('click', toggleSceneList);

    // Start with the scene list open on desktop.
    if (!document.body.classList.contains('mobile')) {
      showSceneList();
    }

    // Set handler for scene switch.
    scenes.forEach(function (scene) {
      var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]') as any;
      el.addEventListener('click', function () {
        switchScene(scene);
        // On mobile, hide scene list after selecting a scene.
        if (document.body.classList.contains('mobile') as any) {
          hideSceneList();
        }
      });
    });

    // DOM elements for view controls.
    var viewUpElement = document.querySelector('#viewUp') as any;
    var viewDownElement = document.querySelector('#viewDown') as any;
    var viewLeftElement = document.querySelector('#viewLeft') as any;
    var viewRightElement = document.querySelector('#viewRight') as any;
    var viewInElement = document.querySelector('#viewIn') as any;
    var viewOutElement = document.querySelector('#viewOut') as any;

    // Dynamic parameters for controls.
    var velocity = 0.7;
    var friction = 3;

    // Associate view controls with elements.
    var controls = viewer.controls();
    controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(viewUpElement, 'y', -velocity, friction), true);
    controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(viewDownElement, 'y', velocity, friction), true);
    controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
    controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
    controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(viewInElement, 'zoom', -velocity, friction), true);
    controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom', velocity, friction), true);

    function sanitize(s: any) {
      return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
    }

    function switchScene(scene: any) {
      stopAutorotate();
      scene.view.setParameters(scene.data.initialViewParameters);
      scene.scene.switchTo();
      startAutorotate();
      updateSceneName(scene);
      updateSceneList(scene);
    }

    function updateSceneName(scene: any) {
      sceneNameElement.innerHTML = sanitize(scene.data.name);
    }

    function updateSceneList(scene: any) {
      for (var i = 0; i < sceneElements.length; i++) {
        var el = sceneElements[i];
        if (el.getAttribute('data-id') === scene.data.id) {
          el.classList.add('current');
        } else {
          el.classList.remove('current');
        }
      }
    }

    function showSceneList() {
      sceneListElement.classList.add('enabled');
      sceneListToggleElement.classList.add('enabled');
    }

    function hideSceneList() {
      sceneListElement.classList.remove('enabled');
      sceneListToggleElement.classList.remove('enabled');
    }

    function toggleSceneList() {
      sceneListElement.classList.toggle('enabled');
      sceneListToggleElement.classList.toggle('enabled');
    }

    function startAutorotate() {
      if (!autorotateToggleElement.classList.contains('enabled')) {
        return;
      }
      viewer.startMovement(autorotate);
      viewer.setIdleMovement(3000, autorotate);
    }

    function stopAutorotate() {
      viewer.stopMovement();
      viewer.setIdleMovement(Infinity);
    }

    function toggleAutorotate() {
      if (autorotateToggleElement.classList.contains('enabled')) {
        autorotateToggleElement.classList.remove('enabled');
        stopAutorotate();
      } else {
        autorotateToggleElement.classList.add('enabled');
        startAutorotate();
      }
    }

    function createLinkHotspotElement(hotspot: any) {

      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('link-hotspot');

      // Create image element.
      var icon = document.createElement('img');
      icon.src = 'assets/img/link.png';
      icon.classList.add('link-hotspot-icon');

      // Set rotation transform.
      var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
      for (var i = 0; i < transformProperties.length; i++) {
        var property = transformProperties[i] as any;
        icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
      }

      // Add click event handler.
      wrapper.addEventListener('click', function () {
        switchScene(findSceneById(hotspot.target));
      });

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      // Create tooltip element.
      var tooltip = document.createElement('div');
      tooltip.classList.add('hotspot-tooltip');
      tooltip.classList.add('link-hotspot-tooltip');
      tooltip.innerHTML = findSceneDataById(hotspot.target)?.name as any;

      wrapper.appendChild(icon);
      wrapper.appendChild(tooltip);

      return wrapper;
    }

    function createInfoHotspotElement(hotspot: any) {

      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('info-hotspot');

      // Create hotspot/tooltip header.
      var header = document.createElement('div');
      header.classList.add('info-hotspot-header');

      // Create image element.
      var iconWrapper = document.createElement('div');
      iconWrapper.classList.add('info-hotspot-icon-wrapper');
      var icon = document.createElement('img');
      icon.src = 'assets/img/info.png';
      icon.classList.add('info-hotspot-icon');
      iconWrapper.appendChild(icon);

      // Create title element.
      var titleWrapper = document.createElement('div');
      titleWrapper.classList.add('info-hotspot-title-wrapper');
      var title = document.createElement('div');
      title.classList.add('info-hotspot-title');
      title.innerHTML = hotspot.title;
      titleWrapper.appendChild(title);

      // Create close element.
      var closeWrapper = document.createElement('div');
      closeWrapper.classList.add('info-hotspot-close-wrapper');
      var closeIcon = document.createElement('img');
      closeIcon.src = 'assets/img/close.png';
      closeIcon.classList.add('info-hotspot-close-icon');
      closeWrapper.appendChild(closeIcon);

      // Construct header element.
      header.appendChild(iconWrapper);
      header.appendChild(titleWrapper);
      header.appendChild(closeWrapper);

      // Create text element.
      var text = document.createElement('div');
      text.classList.add('info-hotspot-text');
      text.innerHTML = hotspot.text;

      // Place header and text into wrapper element.
      wrapper.appendChild(header);
      wrapper.appendChild(text);

      // Create a modal for the hotspot content to appear on mobile mode.
      var modal = document.createElement('div');
      modal.innerHTML = wrapper.innerHTML;
      modal.classList.add('info-hotspot-modal');
      document.body.appendChild(modal);

      var toggle = function () {
        wrapper.classList.toggle('visible');
        modal.classList.toggle('visible');
      };

      // Show content when hotspot is clicked.
      wrapper.querySelector('.info-hotspot-header')?.addEventListener('click', toggle);

      // Hide content when close icon is clicked.
      modal.querySelector('.info-hotspot-close-wrapper')?.addEventListener('click', toggle);

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      return wrapper;
    }

    // Prevent touch and scroll events from reaching the parent element.
    function stopTouchAndScrollEventPropagation(element: any, eventList?: any) {
      eventList = [
        'touchstart', 'touchmove', 'touchend', 'touchcancel',
        'pointerdown', 'pointermove', 'pointerup', 'pointercancel',
        'wheel'
      ];
      for (var i = 0; i < eventList.length; i++) {
        element.addEventListener(eventList[i], function (event: any) {
          event.stopPropagation();
        });
      }
    }

    function findSceneById(id: any) {
      for (var i = 0; i < scenes.length; i++) {
        if (scenes[i].data.id === id) {
          return scenes[i];
        }
      }
      return null;
    }

    function findSceneDataById(id: any) {
      for (var i = 0; i < data.scenes.length; i++) {
        if (data.scenes[i].id === id) {
          return data.scenes[i];
        }
      }
      return null;
    }

    // Display the initial scene.
    switchScene(scenes[0]);
  }

}
