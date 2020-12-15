import { Component, OnInit } from '@angular/core';
import { latLng, MapOptions, tileLayer, Map, Marker, icon } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: Map;
  mapOptions: MapOptions;

  constructor() { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  onMapReady(map: Map) {
    this.map = map;
    this.addSampleMarker();
    this.moveZoomControls();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(-29, 22),
      zoom: 6,
      layers: [
        tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
            maxZoom: 18,
            attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>'
          })
      ],
    };
  }

  private addSampleMarker() {
    const marker = new Marker([-29, 22])
      .setIcon(icon({
        iconSize: [25, 25],
        iconAnchor: [13, 41],
        iconUrl: 'assets/map-markers/marker.png'
      })
    );

    marker.addTo(this.map);
  }

  private moveZoomControls() {
    this.map.zoomControl.setPosition('topright');
  }
}
