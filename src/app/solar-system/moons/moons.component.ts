import { DBService, Moon } from './../../db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moons',
  templateUrl: './moons.component.html',
  styleUrls: ['./moons.component.scss']
})
export class MoonsComponent implements OnInit {

  moons: Array<Moon>;

  constructor(private dbService: DBService) { }

  ngOnInit(): void {
    this.moons = this.dbService.getMoons();
  }
}
