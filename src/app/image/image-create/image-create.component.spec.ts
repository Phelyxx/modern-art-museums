/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImageCreateComponent } from './image-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import faker from '@faker-js/faker';

describe('ImageCreateComponent', () => {
  let component: ImageCreateComponent;
  let fixture: ComponentFixture<ImageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [ImageCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 <div.form-group> elements', () => {
    expect(fixture.debugElement.queryAll(By.css('div.form-group'))).toHaveSize(4);
  });

  it('should validate image fields', () => {
    component.imageForm.controls['source'].setValue(faker.image.imageUrl());
    component.imageForm.controls['altText'].setValue(faker.lorem.sentence());
    component.imageForm.controls['height'].setValue(faker.datatype.number({ min: 1, max: 10000 }));
    component.imageForm.controls['width'].setValue(faker.datatype.number( { min: 1, max: 10000 }));
    expect(component.imageForm.valid).toBeTruthy();
  });

});
