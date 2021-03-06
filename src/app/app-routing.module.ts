import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'solar-system',
    children: [
        {
            path: '',
            pathMatch: 'full',
            component: SolarSystemComponent,
        },
        {
            path: 'planets',
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    component: PlanetsComponent,
                },
                {
                    path: ':id',
                    component: DetailPlanetsComponent,
                },
            ]
        },
        {
            path: 'moons',
            children: [
              {
                path: '',
                pathMatch: 'full',
                component: MoonsComponent,
              },
              {
                path: ':id',
                component: DetailMoonsComponent,
              },
            ]
        },
        {
          path: 'sun',
          component: SunComponent,
        },
    ],
  },
  {
    path: 'universe',
    component: UniverseComponent,
  },
  {
    path: 'nasa',
    component: NasaComponent,
  },
  {
    path: 'spacex',
    component: SpacexComponent,
  },
  {
    path: 'sources',
    component: SourcesComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
