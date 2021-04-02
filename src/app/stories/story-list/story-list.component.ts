import { Component, OnInit } from '@angular/core';
import { StoryService } from '../shared/service/story.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {

  constructor(myStory : StoryService) {
      console.log(myStory)
   }

  ngOnInit(): void {
    M.AutoInit();
  }

}
