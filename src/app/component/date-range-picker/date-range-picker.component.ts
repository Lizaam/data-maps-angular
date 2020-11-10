import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit {
  constructor() { }

  public daterange: any = {};
  public options: any = {
    locale: { 
      format: 'YYYY-MM-DD' 
    },
    alwaysShowCalendars: true,
  }
 
  public selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;

    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  ngOnInit(): void { }
}
