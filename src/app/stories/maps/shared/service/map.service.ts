import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Map } from '../model/map.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map: Map = new Map();
  public subject: Subject<Map> = new Subject();

  constructor() {
  }

  findPosition() {
    window.navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        console.log('myPosition coords');
        this.map.latitude = position.coords.latitude;
        this.map.longitude = position.coords.longitude;
        this.watchPosition().next(this.map);
 
      },
      () => {
        console.log('non ok');
      },
    )
    return this.subject
  };
  watchPosition(): Subject<Map> {
    window.navigator.geolocation.watchPosition(
      (position: GeolocationPosition) => {
        console.log('watchPosition coords')
        this.map.latitude = position.coords.latitude;
        this.map.longitude = position.coords.longitude;
        this.subject.next(this.map);
      },
      () => {
        console.log('non ok');
      },
    )
    return this.subject;
  };

//   displayMarkerUser() {
//       new (window as any).maps.Marker( {
//       position : new (window as any).maps.LatLng(this.map.latitude, this.map.longitude),
//       map: this.map,
//       title: "Vous", 
//     },
//     this.subject.next(this.map)),
    
//     console.log('marker user')
//       return this.subject;
// };

// displayMarkerEnigme() {
//   new (window as any).google.maps.Marker({
//     icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
//     position: new google.maps.LatLng(45.76027407321015, 4.8256350181044),
//     map: this.map,
//     title: "Départ",
//   },
//   this.subject.next(this.map));
//   return this.subject;
// };



}