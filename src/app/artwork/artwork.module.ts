import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkDetailComponent } from './artwork-detail/artwork-detail.component';
import { ArtworkCreateComponent } from './artwork-create/artwork-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ArtworkListComponent],
  declarations: [ArtworkListComponent, ArtworkDetailComponent, ArtworkCreateComponent]
})
export class ArtworkModule { }
