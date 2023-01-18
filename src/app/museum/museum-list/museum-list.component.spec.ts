/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MuseumListComponent } from './museum-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MuseumService } from '../museum.service';
import { Museum } from '../museum';

import { Router } from '@angular/router';
import { Image } from '../museum';
import { RouterTestingModule } from '@angular/router/testing';
import { Artwork } from 'src/app/artwork/artwork';
import { Artist } from 'src/app/artist/artist';

describe('MuseumListComponent', () => {
  let component: MuseumListComponent;
  let fixture: ComponentFixture<MuseumListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule ],
      declarations: [ MuseumListComponent ],
      providers: [ MuseumService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumListComponent);
    component = fixture.componentInstance;

    let image = new Image(1, faker.image.imageUrl(), faker.lorem.sentence(), faker.datatype.number(), faker.datatype.number());
    let artist = new Artist(faker.datatype.number(), faker.lorem.sentence(), faker.lorem.sentence(), faker.lorem.sentence(), image);
    let artwork = new Artwork(1,faker.lorem.sentence(),faker.datatype.number(),faker.lorem.sentence(),faker.lorem.sentence(),[image, image], artist);

    for(let i = 0; i < 10; i++) {
      const museum = new Museum(
        faker.datatype.number(),
        faker.company.companyName(),
        faker.lorem.sentence(),
        faker.address.buildingNumber(),
        faker.address.city(),
        image,
        [artwork]
      );
      component.museums.push(museum);
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

  it('should have the corresponding src to the museum image and alt to the museum name', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.museums[i].image.source)

      expect(img.attributes['alt']).toEqual(
        component.museums[i].image.altText)
    })
  });

  it('should have h5 tag with the museum.name', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.museums[i].name)
    });
  });

  it('should have 9 <div.col.mb-4> elements and the deleted museum should not exist', () => {
    const artist = component.museums.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-4'))).toHaveSize(9)

    debug.queryAll(By.css('div.col.mb-4')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(artist.name);
    });
  });
});
