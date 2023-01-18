import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistCreateComponent } from './artist/artist-create/artist-create.component';
import { ArtistDetailComponent } from './artist/artist-detail/artist-detail.component';
import { ArtistListComponent } from './artist/artist-list/artist-list.component';
import { ArtworkCreateComponent } from './artwork/artwork-create/artwork-create.component';
import { ArtworkDetailComponent } from './artwork/artwork-detail/artwork-detail.component';
import { ArtworkListComponent } from './artwork/artwork-list/artwork-list.component';
import { HomeComponent } from './home/home.component';
import { ImageCreateComponent } from './image/image-create/image-create.component';
import { MuseumDetailComponent } from './museum/museum-detail/museum-detail.component';
import { MuseumListComponent } from './museum/museum-list/museum-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'museums',
    component: MuseumListComponent,
    pathMatch: 'full'
  },
  {
    path: 'museums/:museumId',
    component: MuseumDetailComponent,
  },
  {
    path: 'artists',
    component: ArtistListComponent,
  },
  {
    path: 'artists/create',
    component: ArtistCreateComponent,
  },
  {
    path: 'images/create',
    component: ImageCreateComponent,
  },
  {
    path: 'artworks',
    component: ArtworkListComponent,
  },
  {
    path: 'artworks/create',
    component: ArtworkCreateComponent,
  },
  {
    path: 'artworks/:artworkId',
    component: ArtworkDetailComponent,
  },
  {
    path: 'artists/:artistId',
    component: ArtistDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
