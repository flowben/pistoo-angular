import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MapsComponent, 
    MapComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s'
    })

  ],
  exports: [
    MapsComponent,
    MapComponent,
  ]
})
export class MapsModule { }
