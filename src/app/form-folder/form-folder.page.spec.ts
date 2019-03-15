import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFolderPage } from './form-folder.page';

describe('FormFolderPage', () => {
  let component: FormFolderPage;
  let fixture: ComponentFixture<FormFolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFolderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
