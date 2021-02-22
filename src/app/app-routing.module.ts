import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { PlanetsComponent } from './solar-system/planets/planets.component';
import { MoonsComponent } from './solar-system/moons/moons.component';
import { DetailPlanetsComponent } from './solar-system/planets/detail-planets/detail-planets.component';

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
            component: MoonsComponent,
        },
    ],
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
