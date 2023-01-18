import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCreateComponent } from './image-create/image-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [ImageCreateComponent],
  declarations: [ImageCreateComponent]
})
export class ImageModule { }
