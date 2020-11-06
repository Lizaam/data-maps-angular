import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MapsService {
  END_POINT : string = 'https://geo-json-data.herokuapp.com/geo-json-data';

  constructor(private httpClient: HttpClient) { }

  public getMapData() {
    return this.httpClient.get(this.END_POINT);
  }
}
