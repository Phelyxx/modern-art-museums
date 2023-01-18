/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ArtistListComponent } from './artist-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

import { Image } from '../artist';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule ],
      declarations: [ ArtistListComponent ],
      providers: [ ArtistService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;

    let image = new Image(1, faker.image.imageUrl(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number());
    for(let i = 0; i < 10; i++) {
      const artist = new Artist(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        image,
      );
      component.artists.push(artist);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
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

  it('should have the corresponding src to the artist image and alt to the artist name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.artists[i].image.source)

      expect(img.attributes['alt']).toEqual(
        component.artists[i].image.altText)
    })
  });

  it('should have h5 tag with the artist.name', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.artists[i].name)
    });
  });

  it('should have 9 <div.col.mb-4> elements and the deleted artist should not exist', () => {
    const artist = component.artists.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-4'))).toHaveSize(9)

    debug.queryAll(By.css('div.col.mb-4')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(artist.name);
    });
  });

});
