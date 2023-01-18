/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ArtworkListComponent } from './artwork-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtworkService } from '../artwork.service';
import { Artist, Image } from 'src/app/artist/artist';
import { Artwork } from '../artwork';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArtworkListComponent', () => {
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, RouterTestingModule ],
      declarations: [ ArtworkListComponent ],
      providers: [ ArtworkService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkListComponent);
    component = fixture.componentInstance;

    let image = new Image(1, faker.image.imageUrl(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number());

    let artist = new Artist(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      image,
    );

    for(let i = 0; i < 10; i++){
      const artwork = new Artwork(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        [image, image],
        artist
      );
      component.artworks.push(artwork);
    }

    fixture.detectChanges();
    debug= fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 <div.col.mb-4> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-4'))).toHaveSize(10)
  });

  it('should have 10 <card.h-100> elements', () => {
    expect(debug.queryAll(By.css('div.card.h-100'))).toHaveSize(10)
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

  it('should have the corresponding src to the artwork image and alt to the artwork name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      if(i != 0 ) component.artworks[i].images[0] = component.artworks[i].images[1];
      expect(img.attributes['src']).toEqual(
        component.artworks[i].images[0].source)

      expect(img.attributes['alt']).toEqual(
        component.artworks[i].images[0].altText)
    })
  });

  it('should have h5 tag with the artwork.name', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.artworks[i].name)
    });
  });

  it('should have 9 <div.col.mb-4> elements and the deleted artwork should not exist', () => {
    const artwork = component.artworks.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-4'))).toHaveSize(9)

    debug.queryAll(By.css('div.col.mb-4')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(artwork.name);
    });
  });
});
