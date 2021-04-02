import { Component, OnInit } from '@angular/core';
import { MapService } from '../shared/service/map.service';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
import { Loader } from "@googlemaps/js-api-loader";
import { Map } from '../shared/model/map.model';
import { MarkerService } from '../shared/service/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public loading: boolean = true;
   
  constructor(private mapService: MapService,
    private myMarker : MarkerService,
    private router: Router) {
    mapService.findPosition().subscribe((map: Map) => {
      this.displayMap();
    },
      () => { alert('Erreur de position') });
  }

  ngOnInit(): void {
    M.AutoInit();
  }

  displayMap() {
    this.loading = false;
    new Loader({
      apiKey: "AIzaSyD21vP4lQ5LA5g_GrU0ivkXLUMO0BIKz2s",
      version: "weekly",
    }).load()
      .then(() => {
        this.mapService.map.googleMap = new (window as any).google.maps.Map(document.querySelector("#map"), {
          center: { lat: this.mapService.map.latitude, lng: this.mapService.map.longitude },
          zoom: 10,
        });
        this.myMarker.displayMarkerUser();
        this.myMarker.displayMarkerEnigme();
        alert("connect map ok")
      
      })
      .catch(() => {
        alert("no map")
      });
  }

  validatePosition() {
    console.log('Position ok');
    this.router.navigate(['stories', 'enigmes', 'context', '1']);
  };

};
