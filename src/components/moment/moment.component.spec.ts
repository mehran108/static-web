/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MomentComponent } from './moment.component';

describe('MomentComponent', () => {
  let component: MomentComponent;
  let fixture: ComponentFixture<MomentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
