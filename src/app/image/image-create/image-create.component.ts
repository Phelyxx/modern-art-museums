import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Image } from '../image';
import { ImageService } from 'src/app/image/image.service';


@Component({
  selector: 'app-image-create',
  templateUrl: './image-create.component.html',
  styleUrls: ['./image-create.component.css']
})
export class ImageCreateComponent implements OnInit {
  imageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private imageService: ImageService,
  ) { }

  createImage(image: Image){
    this.imageService.createImage(image).subscribe(image=>{
      console.info("The image was created: ", image)
      this.toastr.success("Confirmation", "Image created")
      this.imageForm.reset();
    })
  }

  cancelCreation(){
    this.imageForm.reset();
  }

  ngOnInit() {
    var URL_REGEXP = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

    this.imageForm = this.formBuilder.group({
      source: ['', [Validators.required, Validators.pattern(URL_REGEXP)]],
      altText: ["", [Validators.required, Validators.maxLength(100)]],
      height: [0, [Validators.required, Validators.min(0), Validators.max(10000)]],
      width: [0, [Validators.required, Validators.max(10000), Validators.min(0)]],
    })
  }
}
