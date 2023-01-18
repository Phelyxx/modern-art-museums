import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Artist, Image } from '../artist';
import { ArtistService } from '../artist.service';
import { ImageService } from 'src/app/image/image.service';


@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css']
})
export class ArtistCreateComponent implements OnInit {
  artistForm!: FormGroup;
  images: Array<Image> = [];

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private artistService: ArtistService,
    private imageService: ImageService,
  ) { }

  createArtist(artist: Artist){
    this.artistService.createArtist(artist).subscribe(artist=>{
      console.info("The artist was created: ", artist)
      this.toastr.success("Confirmation", "Artist created")
      this.artistForm.reset();
    })
  }

  cancelCreation(){
    this.artistForm.reset();
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(images => {
      this.images = images;
    });

    this.artistForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      birthplace: ["", [Validators.required, Validators.maxLength(100)]],
      birthdate: ["", Validators.required],
      image: ["", Validators.required],
    })
  }
}
