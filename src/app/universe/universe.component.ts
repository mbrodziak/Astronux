import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.scss']
})
export class UniverseComponent implements OnInit {

  source: string;
  rand: number;

  constructor() { }

  ngOnInit(): void {
    this.rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

    if (this.rand === 1) {
      this.source = './assets/abstract.jpg';
    }
    else if (this.rand === 2) {
      this.source = './assets/eclipse.webp';
    }
  }
}
