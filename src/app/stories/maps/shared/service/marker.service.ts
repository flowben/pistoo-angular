import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Map } from '../model/map.model';
import { Marker } from '../model/marker.model';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {


  public marker: Marker = new Marker();
  private subject: Subject<Marker> = new Subject();

  constructor(private mapService: MapService) {
    mapService.subject.subscribe((map : Map) => {
        this.marker.latitude = map.latitude;
        this.marker.longitude = map.longitude;
    })

  }

  displayMarkerUser() {
    this.marker.markerUser = new (window as any).google.maps.Marker({
      position: new (window as any).google.maps.LatLng(this.marker.latitude, this.marker.longitude),
      map: this.mapService.map.googleMap,
      title: "Vous",
    });
   };

   displayMarkerEnigme(){
     this.marker.markerEnigme = new (window as any).google.maps.Marker({
      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
      position: new (window as any).google.maps.LatLng(45.76027407321015, 4.8256350181044),
      map: this.mapService.map.googleMap,
      title: "Départ",
   });
  };
};
