import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DBService {

    PLANETS = [
        new Planet('1', 'Merkury', 'skalista', 'mercury.png'),
        new Planet('2', 'Wenus', 'skalista', 'venus.jpg'),
        new Planet('3', 'Ziemia', 'skalista', 'earth.jpeg'),
        new Planet('4', 'Mars', 'skalista', 'mars.jpg'),
        new Planet('5', 'Jowisz', 'gazowa', 'jupiter.jpg'),
        new Planet('6', 'Saturn', 'gazowa', 'saturn.webp'),
        new Planet('7', 'Uran', 'gazowa', 'uranus.jpg'),
        new Planet('8', 'Neptun', 'gazowa', 'neptune.jpg'),
    ];

    MOONS = [
        new Moon('1', 'Ksieżyc', 'Ziemia', 'moon.jpg'),
        new Moon('2', 'Deimos', 'Mars', 'deimos.jpg'),
        new Moon('3', 'Fobos', 'Mars', 'phobos.jpg'),
        new Moon('4', 'Io', 'Jowisz', 'io.jpg'),
        new Moon('5', 'Europa', 'Jowisz', 'europa.jpg'),
        new Moon('6', 'Ganimedes', 'Jowisz', 'ganimedes.jpg'),
        new Moon('7', 'Kallisto', 'Jowisz', 'callisto.jpg'),
        new Moon('8', 'Mimas', 'Saturn', 'mimas.jpg'),
        new Moon('9', 'Enceladus', 'Saturn', 'enceladus.jpg'),
        new Moon('10', 'Tetyda', 'Saturn', 'tethys.jpg'),
        new Moon('11', 'Dione', 'Saturn', 'dione.jpg'),
        new Moon('12', 'Tytan', 'Saturn', 'titan.jpg'),
        new Moon('13', 'Ariel', 'Uran', 'ariel.jpg'),
        new Moon('14', 'Miranda', 'Uran', 'miranda.jpg'),
        new Moon('15', 'Tryton', 'Neptun', 'triton.jpg'),
    ];

    getPlanets(): Array<Planet> {
        return this.PLANETS;
    }

    getPlanetById(id: string): Planet {
        return this.PLANETS.find(element => element.id === id);
    }

    getMoons(): Array<Moon> {
        return this.MOONS;
    }

    getMoonsById(id: string): Moon {
        return this.MOONS.find(element => element.id === id);
    }
}

export class Planet {
    constructor(public id: string, public name: string, public type: string, public photo: string) {}
}

export class Moon {
    constructor(public id: string, public name: string, public planet: string, public photo: string) {}
}
