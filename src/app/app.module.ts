import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppHeaderModule } from './app-header/app-header.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistModule } from './artist/artist.module';
import { ArtworkModule } from './artwork/artwork.module';
import { HomeComponent } from './home/home.component';
import { MuseumModule } from './museum/museum.module';
import { HttpErrorInterceptorService } from './interceptors/http-error-interceptor.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageModule } from './image/image.module';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent
   ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppHeaderModule,
    AppRoutingModule,
    ArtistModule,
    ImageModule,
    ArtworkModule,
    MuseumModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      }
    ),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
