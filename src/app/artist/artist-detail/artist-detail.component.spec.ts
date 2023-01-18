/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ArtistDetailComponent } from './artist-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

import { Image } from '../artist';
import { Artwork } from 'src/app/artwork/artwork';
import { ArtistDetail, Movement } from '../artist-detail';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArtistDetailComponent', () => {
  let component: ArtistDetailComponent;
  let fixture: ComponentFixture<ArtistDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ArtistDetailComponent ],
      providers: [ ArtistService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailComponent);
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

    const movements: Movement[] = [];

    for(let i = 0; i < 10; i++){
      const movement = new Movement(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      movements.push(movement);
    }

    component.artist = new ArtistDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      movements,
      artworks,
      image,
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an img element with src=artist.image', () => {
    const img = debug.query(By.css('img'));
    expect(img.nativeElement.src).toEqual(component.artist.image.source);
  });

  it('should have an img element with alt=artist.image.altText', () => {
    const img = debug.query(By.css('img'));
    expect(img.nativeElement.alt).toEqual(component.artist.image.altText);
  });

  it('should have 10 card footers of artist artworks', () => {
    const cards = debug.queryAll(By.css('.card-footer'));
    expect(cards.length).toEqual(10);
  });

  it('should have 10 <a> of movements inside .col-md-3', () => {
    const a = debug.queryAll(By.css('.col-md-3 a'));
    expect(a.length).toEqual(10);
  });

});
