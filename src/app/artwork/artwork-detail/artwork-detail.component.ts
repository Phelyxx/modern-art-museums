import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork } from '../artwork';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-detail',
  templateUrl: './artwork-detail.component.html',
  styleUrls: ['./artwork-detail.component.css']
})
export class ArtworkDetailComponent implements OnInit {

  artworkId!: number;
  artwork!: Artwork;

  constructor(
    private artworkService: ArtworkService,
    private router: ActivatedRoute,
    ) { }

  getArtwork(id: number): void {
    this.artworkService.getArtwork(id).subscribe((artwork) => {

      this.artwork = artwork;
    });
  }

  ngOnInit() {
    this.artworkId = parseInt(this.router.snapshot.params.artworkId)
    this.artworkService.getArtwork(this.artworkId)
      .subscribe((artwork) => {
        if(this.artworkId != 100) {artwork.images[0] = artwork.images[1]; console.log("hollaaS");
      };
        this.artwork = artwork;

    });
  }

}
