import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComousarPage } from './comousar.page';

describe('ComousarPage', () => {
  let component: ComousarPage;
  let fixture: ComponentFixture<ComousarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComousarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComousarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
