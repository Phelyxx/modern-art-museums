import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ArtistListComponent],
  declarations: [ArtistListComponent, ArtistDetailComponent, ArtistCreateComponent]
})
export class ArtistModule { }
