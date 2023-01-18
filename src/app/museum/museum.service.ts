import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Museum } from './museum';
import { Artwork } from '../artwork/artwork';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {

  private apiUrl: string = environment.baseUrl + 'museums';

  constructor(private http: HttpClient) { }

  getMuseums(): Observable<Museum[]> {
    return this.http.get<Museum[]>(this.apiUrl);
  }

  getMuseum(id: number): Observable<Museum> {
    return this.http.get<Museum>(this.apiUrl + '/' + id);
  }

}
