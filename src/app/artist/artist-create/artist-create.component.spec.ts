/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Artist, Image } from '../artist';

import { ArtistCreateComponent } from './artist-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ArtistService } from '../artist.service';
import faker from '@faker-js/faker';
import { By } from '@angular/platform-browser';


describe('ArtistCreateComponent', () => {
  let component: ArtistCreateComponent;
  let fixture: ComponentFixture<ArtistCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule],
      declarations: [ArtistCreateComponent],
      providers: [ArtistService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCreateComponent);
    component = fixture.componentInstance;

    const image = new Image(
      faker.datatype.number(),
      faker.image.imageUrl(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.datatype.number()
    );
    component.images.push(image);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <div.form-group> image option', () => {
    expect(fixture.debugElement.queryAll(By.css('div.form-group option'))).toHaveSize(1);
  });

  it('should validate artist fields', () => {
    component.artistForm.controls['name'].setValue(faker.lorem.sentence());
    component.artistForm.controls['birthplace'].setValue(faker.lorem.sentence());
    component.artistForm.controls['birthdate'].setValue(faker.date.past());
    component.artistForm.controls['image'].setValue(faker.lorem.sentence());
    expect(component.artistForm.valid).toBeTruthy();
  });
});

