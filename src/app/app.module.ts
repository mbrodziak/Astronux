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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarSystemComponent,
    PlanetsComponent,
    MoonsComponent,
    DetailPlanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
