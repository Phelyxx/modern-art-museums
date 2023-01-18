/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MuseumDetailComponent } from './museum-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MuseumService } from '../museum.service';
import { Museum } from '../museum';

import { Image } from '../museum';
import { Artwork } from 'src/app/artwork/artwork';
import { RouterTestingModule } from '@angular/router/testing';
import { Artist } from 'src/app/artist/artist';

describe('MuseumDetailComponent', () => {
  let component: MuseumDetailComponent;
  let fixture: ComponentFixture<MuseumDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ MuseumDetailComponent ],
      providers: [ MuseumService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumDetailComponent);
    component = fixture.componentInstance;

    let image = new Image(1, faker.image.imageUrl(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number());
    const artworks: Artwork[] = [];

    for(let i = 0; i < 10; i++){
      const artwork = new Artwork(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        [image, image],
        new Artist(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          image,
      ));
      artworks.push(artwork);
    }

    component.museum = new Museum(
      faker.datatype.number(),
      faker.company.companyName(),
      faker.lorem.sentence(),
      faker.address.buildingNumber(),
      faker.address.city(),
      image,
      artworks);

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element with src=museum.image', () => {
    const img = debug.query(By.css('img'));
    expect(img.nativeElement.src).toEqual(component.museum.image.source);
  });

  it('should have an img element with alt=artist.museum.altText', () => {
    const img = debug.query(By.css('img'));
    expect(img.nativeElement.alt).toEqual(component.museum.image.altText);
  });

  it('should have 10 card footers of museum artworks', () => {
    const cards = debug.queryAll(By.css('.card-footer'));
    expect(cards.length).toEqual(10);
  });
});
