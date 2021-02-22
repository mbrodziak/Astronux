import { Observable } from 'rxjs';
import { DBService, Planet } from './../../../db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-planets',
  templateUrl: './detail-planets.component.html',
  styleUrls: ['./detail-planets.component.scss']
})
export class DetailPlanetsComponent implements OnInit {

  planet: Planet;

  constructor(private dbServide: DBService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: Params) => {
      this.planet = this.dbServide.getPlanetById(param.get('id'));
    });
  }

}
