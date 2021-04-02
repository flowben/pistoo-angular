import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MapsComponent } from './maps.component';

const mapsRoutes: Routes = [
  {
    path: '',
    component: MapsComponent,
    children: [
      {path: 'map',
      component: MapComponent,
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(mapsRoutes)],
  exports: [RouterModule]

})
export class MapsRoutingModule { }
