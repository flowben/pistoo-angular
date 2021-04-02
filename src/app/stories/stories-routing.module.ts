import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LauncherComponent } from './launcher/launcher.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { StoriesComponent } from './stories.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryComponent } from './story/story.component';

const storiesRoutes: Routes = [

  {
    path:'', 
    component: StoriesComponent,
    children: [
        {
          path:'',
          component: NavBarComponent,
        },
        {
          path:'home',
          component:LauncherComponent,
        },
        {
          path:'list',
          component: StoryListComponent,
        },
        {
          path:'story/:number',
          component: StoryComponent,
        },
        {
          path:'maps',
          loadChildren: () => import ('./maps/maps.module')
            .then((m => m.MapsModule))
        },
        { 
          path:'enigmes',
          loadChildren: () => import ('./enigmes/enigmes.module')
            .then((m) => m.EnigmesModule)
        },
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(storiesRoutes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
