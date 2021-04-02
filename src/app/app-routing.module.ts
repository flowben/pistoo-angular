import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'stories',
      loadChildren: () => import ('./stories/stories.module')
        .then(m => m.StoriesModule)
    },
    {
      path:'**',
      redirectTo: 'stories/home',
    }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
