import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeFormComponent } from './enigme-form/enigme-form.component';
import { EnigmeComponent } from './enigme/enigme.component';
import { EnigmesComponent } from './enigmes.component';

const enigmesRoutes: Routes = [
  {
    path: '',
    component: EnigmesComponent,
    children:[
      {
        path:'context/:number',
        component: EnigmeComponent,
      },
      {
        path:'form/:number',
        component: EnigmeFormComponent,
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(enigmesRoutes)],
  exports: [RouterModule]
})
export class EnigmesRoutingModule { }
