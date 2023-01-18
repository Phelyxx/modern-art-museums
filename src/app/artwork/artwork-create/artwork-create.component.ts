import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Artist, Image } from '../../artist/artist';
import { ImageService } from 'src/app/image/image.service';
import { ArtworkService } from '../artwork.service';
import { Artwork } from '../artwork';
import { ArtistService } from 'src/app/artist/artist.service';

@Component({
  selector: 'app-artwork-create',
  templateUrl: './artwork-create.component.html',
  styleUrls: ['./artwork-create.component.css']
})
export class ArtworkCreateComponent implements OnInit {
  artworkForm!: FormGroup;
  images: Array<Image> = [];
  artists: Array<Artist> = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artworkService: ArtworkService,
    private imageService: ImageService,
    private artistService: ArtistService,
  ) { }

  createArtwork(artwork: Artwork){
    this.artworkService.createArtwork(artwork).subscribe(artwork => {
      console.info("The artwork was created: ", artwork)
      this.toastr.success("Confirmation", "Artwork created")
      this.artworkForm.reset();
    })
  }

  cancelCreation(){
    this.artworkForm.reset();
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => {
      this.images = images;
    });

    this.artistService.getArtists().subscribe(artists => {
      this.artists = artists;
    });

    this.artworkForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      year: ["", Validators.required],
      description: ["", [Validators.required, Validators.maxLength(100)]],
      type: ["", Validators.required],
      image: ["", Validators.required],
      artist: ["", Validators.required],
    })
  }
}
