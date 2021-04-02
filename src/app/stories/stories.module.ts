import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoriesRoutingModule } from './stories-routing.module';
import { StoriesComponent } from './stories.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { StoryComponent } from './story/story.component';
import { StoryListComponent } from './story-list/story-list.component';
import { LauncherComponent } from './launcher/launcher.component';


@NgModule({
  declarations: [
    StoriesComponent,  
    NavBarComponent, 
    StoryComponent,
    StoryListComponent,
    LauncherComponent],

  imports: [
    CommonModule,
    StoriesRoutingModule,
  ],
  exports: [
    StoriesComponent,
    NavBarComponent, 
    StoryComponent,
    StoryListComponent,
    LauncherComponent,
    ]

})
export class StoriesModule { }
