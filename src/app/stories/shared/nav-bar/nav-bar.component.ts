import { Component, OnInit } from '@angular/core';
//import pour activier materialize (doit s efaire sur tous les composants qui en auront besoin)
import * as M from 'materialize-css';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

}
