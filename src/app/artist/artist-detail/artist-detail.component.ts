import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistDetail } from '../artist-detail';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

  artistId!: number;
  artist!: ArtistDetail;

  constructor(
    private artistService: ArtistService,
    private router: ActivatedRoute,
    ) { }

  getArtist(id: number): void {
    this.artistService.getArtist(id).subscribe((artist) => {
      this.artist = artist;
    });
  }

  ngOnInit() {
    this.artistId = parseInt(this.router.snapshot.params.artistId)
    this.artistService.getArtist(this.artistId)
      .subscribe((artist) => {
        this.artist = artist;

    });
  }

  formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("es-ES", { year: 'numeric', month: 'long' ,  day: 'numeric' });
  }

}
