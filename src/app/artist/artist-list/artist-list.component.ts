import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Array<Artist> = [];

  constructor(
    private artistService: ArtistService,
    private routerPath: Router,
    ) { }

  getArtists(): void {
    this.artistService.getArtists().subscribe((artists) => {
      this.artists = artists;
    });
  }

  ngOnInit() {
    this.getArtists();
  }

  formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("es-ES", { year: 'numeric', month: 'long' ,  day: 'numeric' });
  }

  onArtistDetail = (artistId: number) => {
    this.routerPath.navigate(['/artists', artistId]);
  }

}
