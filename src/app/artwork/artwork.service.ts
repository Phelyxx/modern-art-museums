import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Observable, retry } from 'rxjs';
import { Artwork } from './artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.apiUrl}artworks`);
  }

  getArtwork(id: number): Observable<Artwork> {
    return this.http.get<Artwork>(`${this.apiUrl}artworks/${id}`);
  }

  getArtworksFromAMuseum(museumId: number): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.apiUrl}museums/${museumId}/artworks/`);
  }

  getArtworksFromAnArtist(artistId: number): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.apiUrl}artists/${artistId}/artworks/`);
  }

  getArtworksFromAExhibition(museumId: number, exhibitionId: number): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.apiUrl}museums/${museumId}exhibitions/${exhibitionId}/artworks/`);
  }

  createArtwork(artwork: Artwork): Observable<Artwork> {
    return this.http.post<Artwork>(`${this.apiUrl}artworks`, artwork);
  }
}
