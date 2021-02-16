import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DBService } from './db.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { PlanetsComponent } from './solar-system/planets/planets.component';
import { MoonsComponent } from './solar-system/moons/moons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarSystemComponent,
    PlanetsComponent,
    MoonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
