/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PanoramaImageRendererComponent } from './panorama-image-renderer.component';

describe('PanoramaImageRendererComponent', () => {
  let component: PanoramaImageRendererComponent;
  let fixture: ComponentFixture<PanoramaImageRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoramaImageRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaImageRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
