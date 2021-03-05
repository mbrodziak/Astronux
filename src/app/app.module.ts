import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DBService } from './db.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { PlanetsComponent } from './solar-system/planets/planets.component';
import { MoonsComponent } from './solar-system/moons/moons.component';
import { DetailPlanetsComponent } from './solar-system/planets/detail-planets/detail-planets.component';
import { DetailMoonsComponent } from './solar-system/moons/detail-moons/detail-moons.component';
import { SunComponent } from './solar-system/sun/sun.component';
import { SourcesComponent } from './sources/sources.component';
import { NasaComponent } from './nasa/nasa.component';
import { SpacexComponent } from './spacex/spacex.component';
import { UniverseComponent } from './universe/universe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarSystemComponent,
    PlanetsComponent,
    MoonsComponent,
    DetailPlanetsComponent,
    DetailMoonsComponent,
    SunComponent,
    SourcesComponent,
    NasaComponent,
    SpacexComponent,
    UniverseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
