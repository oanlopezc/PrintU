import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydocPage } from './mydoc.page';

describe('MydocPage', () => {
  let component: MydocPage;
  let fixture: ComponentFixture<MydocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
