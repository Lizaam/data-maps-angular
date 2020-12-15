import { Component, OnInit } from '@angular/core';
import { Cities } from './interfaces/cities';
import { Days } from './interfaces/days';
import { DAYS_LIST, CITIES_LIST } from './lists/constants';
import { MapsService } from './services/maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private mapsService: MapsService) { }

  public daysList: Days[] = DAYS_LIST;
  public citiesList: Cities[] = CITIES_LIST;

  isShowing = true;
  geoJsonData: any;

  ngOnInit() {
    this.mapsService.getMapData().subscribe((data: any[]) => {
      console.log(data);
      this.geoJsonData = data;
    });
  }
}