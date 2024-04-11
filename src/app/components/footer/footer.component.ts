import { Component } from '@angular/core';
import {GoogleMap} from '@angular/google-maps';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  center: google.maps.LatLngLiteral = {lat: 24.1820263, lng: -110.3026147};
  zoom = 18;
  display: google.maps.LatLngLiteral;

  constructor(){
    this.display = this.center;
  }

  

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng!.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }
}
