import { DBService, Moon } from './../../db.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-moons',
  templateUrl: './moons.component.html',
  styleUrls: ['./moons.component.scss']
})
export class MoonsComponent implements OnInit {

  moons: Array<Moon>;

  constructor(private dbService: DBService, private router: Router) { }

  ngOnInit(): void {
    this.moons = this.dbService.getMoons();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }
}
