/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DealershipComponent } from './dealership.component';

describe('DealershipComponent', () => {
  let component: DealershipComponent;
  let fixture: ComponentFixture<DealershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
