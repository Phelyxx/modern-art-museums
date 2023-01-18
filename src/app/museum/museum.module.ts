import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MuseumListComponent],
  declarations: [MuseumListComponent, MuseumDetailComponent]
})
export class MuseumModule { }
