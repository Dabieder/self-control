import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.scss']
})
export class WeekdayComponent implements OnInit {

  @Input() name: string;
  @Output() timeValueChange = new EventEmitter<number>();
  hoursDisplay = 5;

  constructor() { }

  ngOnInit() {
  }

  onSliderValueChange(event: MatSliderChange) {
    console.log("Slider Value Change event: ", event);
    this.timeValueChange.emit(event.value);
    this.hoursDisplay = event.value;
  }

}
