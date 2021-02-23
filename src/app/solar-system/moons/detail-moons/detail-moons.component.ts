import { ActivatedRoute, Params } from '@angular/router';
import { DBService } from './../../../db.service';
import { Component, OnInit } from '@angular/core';
import { Moon } from 'src/app/db.service';

@Component({
  selector: 'app-detail-moons',
  templateUrl: './detail-moons.component.html',
  styleUrls: ['./detail-moons.component.scss']
})
export class DetailMoonsComponent implements OnInit {

  moon: Moon;

  constructor(private dbService: DBService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: Params) => {
      this.moon = this.dbService.getMoonById(param.get('id'));
    });
  }
}
