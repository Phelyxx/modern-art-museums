import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl: string = environment.baseUrl + 'images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.apiUrl);
  }

  createImage(image: Image): Observable<Image> {
    return this.http.post<Image>(this.apiUrl, image);
  }

}
