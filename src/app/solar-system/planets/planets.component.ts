import { Component, OnInit } from '@angular/core';
import { DBService, Planet } from './../../db.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Array<Planet>;

  constructor(private dbService: DBService, private router: Router) { }

  ngOnInit(): void {
    this.planets = this.dbService.getPlanets();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }
}
