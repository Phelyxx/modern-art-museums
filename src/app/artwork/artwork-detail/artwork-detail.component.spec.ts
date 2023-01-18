/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ArtworkDetailComponent } from './artwork-detail.component';
import { Artwork } from '../artwork';
import { Artist, Image } from 'src/app/artist/artist';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtworkService } from '../artwork.service';

describe('ArtworkDetailComponent', () => {
  let component: ArtworkDetailComponent;
  let fixture: ComponentFixture<ArtworkDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ArtworkDetailComponent ],
      providers: [ ArtworkService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkDetailComponent);
    component = fixture.componentInstance;

    let image = new Image(1, faker.image.imageUrl(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number());

    let artist = new Artist(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      image,
    );

    component.artwork = new Artwork(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      [image, image],
      artist
    );

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a p.h3.p-3 element with artworkDetail.name', () => {
    const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(element.textContent).toContain(component.artwork.name);
  });

  it('should have an img element with src= artworkDetail.images.source', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.artwork.images[0].source
    );
  });

  it('should have an img element with alt= artworkDetail.images.altText', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.artwork.images[0].altText
    );
  });

  it('should have one dd tag for component.artworkDetail.artist.name', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'Artista';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.artwork.artist.name);
  });

  it('should have one dd tag for component.artworkDetail.year', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'Año';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.artwork.year);
  });

  it('should have one dd tag for component.artworkDetail.type', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'Tipo';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.artwork.type);
  });

  it('should have one dd tag for component.artworkDetail.description', () => {
    const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'Descripción';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.artwork.description);
  });
});
