import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Museum } from '../museum';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  museumId!: number;
  museum!: Museum;

  constructor(
    private museumService: MuseumService,
    private router: ActivatedRoute,
  ) { }

  getMuseum(id: number): void {
    this.museumService.getMuseum(id).subscribe((museum) => {
      this.museum = museum;
    });
    console.log(this.museum);
  }

  ngOnInit() {
    this.museumId = parseInt(this.router.snapshot.params.museumId)
    this.museumService.getMuseum(this.museumId)
      .subscribe((museum) => {
        this.museum = museum;

    });
  }

}
