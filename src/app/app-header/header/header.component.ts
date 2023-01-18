import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private routerPath: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  goTo(menu: string) {
    if (menu === "museums") {
      this.routerPath.navigate([`/museums/`])
    }
    else if (menu === "artists") {
      this.routerPath.navigate([`/artists/`])
    }
    else if (menu === "artists/create") {
      this.routerPath.navigate([`/artists/create`])
    }
    else if (menu ==='artworks') {
      this.routerPath.navigate([`/artworks/`])
    }
    else if (menu ==='artworks/create') {
      this.routerPath.navigate([`/artworks/create`])
    }
    else if (menu ==='images/create') {
      this.routerPath.navigate([`/images/create`])
    }
    else {
      this.routerPath.navigate([`/`])
    }
  }

}
