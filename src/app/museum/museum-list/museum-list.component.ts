import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  museums: Array<Museum> = [];

  constructor(
    private museumService: MuseumService,
    private routerPath: Router) { }

  getMuseums(): void {
    this.museumService.getMuseums().subscribe((museums) => {
      this.museums = museums;
    });
  }

  ngOnInit() {
    this.getMuseums();
  }

  onMuseumDetail = (museumId: number) => {
    this.routerPath.navigate(['/museums', museumId]);
  }

}
