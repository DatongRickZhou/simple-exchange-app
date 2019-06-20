import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPage } from './empty.page';

describe('EmptyPage', () => {
  let component: EmptyPage;
  let fixture: ComponentFixture<EmptyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
