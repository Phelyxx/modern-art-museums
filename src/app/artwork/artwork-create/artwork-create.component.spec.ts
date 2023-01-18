/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtworkCreateComponent } from './artwork-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ArtworkService } from '../artwork.service';
import faker from '@faker-js/faker';
import { Artist, Image } from 'src/app/artist/artist';

describe('ArtworkCreateComponent', () => {
  let component: ArtworkCreateComponent;
  let fixture: ComponentFixture<ArtworkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [ ArtworkCreateComponent ],
      providers: [ArtworkService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkCreateComponent);
    component = fixture.componentInstance;

    const image = new Image(
      faker.datatype.number(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.datatype.number()
    );
    component.images.push(image);

    const artist = new Artist(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      image,
    );

    component.artists.push(artist);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <div.form-group> artwork option', () => {
    expect(fixture.debugElement.queryAll(By.css('div.form-group option'))).toHaveSize(2);
  });

  it('should validate artwork fields', () => {
    component.artworkForm.controls['name'].setValue(faker.lorem.sentence());
    component.artworkForm.controls['year'].setValue(faker.date.past());
    component.artworkForm.controls['type'].setValue(faker.lorem.sentence());
    component.artworkForm.controls['description'].setValue(faker.lorem.sentence());
    component.artworkForm.controls['image'].setValue(faker.lorem.sentence());
    component.artworkForm.controls['artist'].setValue(faker.lorem.sentence());
    expect(component.artworkForm.valid).toBeTruthy();
  });
});
