import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdocPage } from './newdoc.page';

describe('NewdocPage', () => {
  let component: NewdocPage;
  let fixture: ComponentFixture<NewdocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
