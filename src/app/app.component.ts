import { Component } from '@angular/core';
import { Cities } from './interfaces/cities';
import { Days } from './interfaces/days';
import { DAYS_LIST, CITIES_LIST } from './lists/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public daysList: Days[] = DAYS_LIST;
  public citiesList: Cities[] = CITIES_LIST;

  isShowing: boolean = true;
}