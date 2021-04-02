import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Story } from '../shared/model/story.model';
import { StoryService } from '../shared/service/story.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'] 
})
export class StoryComponent implements OnInit {

  // public index : number = 0;
  public story: Story;
  constructor(
    private storyService: StoryService,
    private activeRoute: ActivatedRoute) {

    this.story = new Story;
    
    this.activeRoute?.params.subscribe((params: any) => {
      console.log(+params["number"]);
      // console.log(this.index);
      this.story = this.storyService.storyList[+params['number'] - 1];
      // if (this.index < 1 || this.index > storyService.storyList.length) {
      //       alert("la page n'existe pas")
      
    }); 
  }

  ngOnInit(): void {
    M.AutoInit();
  }

}
