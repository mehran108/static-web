
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-panorama-image-renderer',
  templateUrl: './panorama-image-renderer.component.html',
  styleUrls: ['./panorama-image-renderer.component.scss']
})
export class PanoramaImageRendererComponent implements OnInit {
  ngOnInit() {
    window.addEventListener("wheel", (event: any) => {
      const delta = Math.sign(event.wheelDelta);
      //getting the mouse wheel change (120 or -120 and normalizing it to 1 or -1)
      var mycam = document.getElementById('cam')?.getAttribute('camera') as any;
      var finalZoom = (document.getElementById('cam')?.getAttribute('camera') as any).zoom + delta;
      //limiting the zoom so it doesnt zoom too much in or out
      if (finalZoom < 1)
        finalZoom = 1;
      if (finalZoom > 5)
        finalZoom = 5;
      if (mycam) {
        mycam.zoom = finalZoom;

      }
      //setting the camera element
      document.getElementById('cam')?.setAttribute('camera', mycam);
    });
    setTimeout(() => {
      document.body.className = '';

    }, 100);
  }
}
