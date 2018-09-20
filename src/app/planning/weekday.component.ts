import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material';
import { DailyPlan } from '../models/daily-plan';

@Component({
  selector: 'app-weekday',
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.scss']
})
export class WeekdayComponent implements OnInit {

  @Input() name: string;
  @Output() timeValueChange = new EventEmitter<DailyPlan>();
  hoursDisplay = 5;
  dailyPlan = new DailyPlan(new Date(), 0);
  constructor() { }

  ngOnInit() {
  }

  onSliderValueChange(event: MatSliderChange) {
    console.log("Slider Value Change event: ", event);
    this.dailyPlan.timeCommitment = event.value;
    this.timeValueChange.emit(this.dailyPlan);
    this.hoursDisplay = event.value;
  }

  onSliderValueInput(event: MatSliderChange){
    this.hoursDisplay = event.value;
  }

}
