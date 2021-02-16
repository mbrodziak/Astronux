import { Component, OnInit } from '@angular/core';
import { DBService, Planet } from './../../db.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Array<Planet>;

  constructor(private dbService: DBService) { }

  ngOnInit(): void {
    this.planets = this.dbService.getPlanets();
  }
}
