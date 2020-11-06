import { Component } from '@angular/core';
import { Days } from './interfaces/days';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isShowing: boolean = true;

  public daysList: Days[] = [
    { id: 1, day: "Monday", code: "MON", value: "monday" },
    { id: 2, day: "Tuesday", code: "TUE", value: "tuesday" },
    { id: 3, day: "Wednesday", code: "WED", value: "wednesday" },
    { id: 4, day: "Thursday", code: "THU", value: "thursday" },
    { id: 5, day: "Friday", code: "FRI", value: "friday" },
    { id: 6, day: "Saturday", code: "SAT", value: "saturday" },
    { id: 7, day: "Sunday", code: "SUN", value: "sunday" }
  ];
}
