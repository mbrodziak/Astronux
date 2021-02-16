import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DBService {

    PLANETS = [
        new Planet('1', 'Merkury', 'skalista', 'mercury.png'),
        new Planet('2', 'Wenus', 'skalista', 'venus.jpg'),
        new Planet('3', 'Ziema', 'skalista', 'earth.jpeg'),
        new Planet('4', 'Mars', 'skalista', 'mars.jpg'),
        new Planet('5', 'Jowisz', 'gazowa', 'jupiter.jpg'),
        new Planet('6', 'Saturn', 'gazowa', 'saturn.webp'),
        new Planet('7', 'Uran', 'gazowa', 'uranus.jpg'),
        new Planet('8', 'Neptun', 'gazowa', 'neptune.jpg'),
    ];

    getPlanets(): Array<Planet> {
        return this.PLANETS;
    }

    getPlanetById(id: string): Planet {
        return this.PLANETS.find(element => element.id === id);
    }
}

export class Planet {
    constructor(public id: string, public name: string, public type: string, public photo: string) {}
}

