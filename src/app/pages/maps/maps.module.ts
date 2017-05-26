<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';

export const routes = [
  { path: '', redirectTo: 'googlemaps', pathMatch: 'full'},
  { path: 'googlemaps', component: GoogleMapsComponent, data: { breadcrumb: 'Google' } },
  { path: 'leafletmaps', component: LeafletMapsComponent, data: { breadcrumb: 'Leaflet' } },
  { path: 'vectormaps', component: VectorMapsComponent, data: { breadcrumb: 'Vector' } }
];

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes),
    AgmCoreModule
  ],
  declarations: [GoogleMapsComponent, LeafletMapsComponent, VectorMapsComponent]
})
export class MapsModule { }
=======
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DirectivesModule } from '../../theme/directives/directives.module';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LeafletMapsComponent } from './leaflet-maps/leaflet-maps.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';

export const routes = [
  { path: '', redirectTo: 'googlemaps', pathMatch: 'full'},
  { path: 'googlemaps', component: GoogleMapsComponent, data: { breadcrumb: 'Google' } },
  { path: 'leafletmaps', component: LeafletMapsComponent, data: { breadcrumb: 'Leaflet' } },
  { path: 'vectormaps', component: VectorMapsComponent, data: { breadcrumb: 'Vector' } }
];

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes),
    AgmCoreModule
  ],
  declarations: [GoogleMapsComponent, LeafletMapsComponent, VectorMapsComponent]
})
export class MapsModule { }
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
