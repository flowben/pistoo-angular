import { Component, OnInit } from '@angular/core';
import { Story } from './shared/model/story.model';
import { StoryService } from './shared/service/story.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  
  constructor(private storyService : StoryService) { 
    
  }

  ngOnInit(): void {
    M.AutoInit();
  }
 
}
