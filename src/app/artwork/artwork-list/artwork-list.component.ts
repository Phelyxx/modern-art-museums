import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  artworks : Array<Artwork> = [];

  selectedArtwork!: Artwork;
  selected: Boolean = false;

  constructor(
    private artworkService: ArtworkService,
    private routerPath: Router,
    ) { }

  getArtworks():void {
    this.artworkService.getArtworks().subscribe((artworks) => {
      artworks.map((artwork, i) => {
        if(i != 0) artwork.images[0] = artwork.images[1];

        this.artworks.push(artwork);
      })

    });
  }

  onArtworkDetail = (artworkId: number) => {
    this.routerPath.navigate(['/artworks', artworkId]);
  }

  ngOnInit() {
    this.getArtworks();
  }

}
