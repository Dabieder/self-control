import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatSliderChange } from "@angular/material";
import { DailyPlan } from "../models/daily-plan";

@Component({
  selector: "app-rating-page",
  templateUrl: "./rating-page.component.html",
  styleUrls: ["./rating-page.component.css"]
})
export class RatingPageComponent implements OnInit {
  goalDisplay = 0;
  @Input() value: number;
  @Output() valueChange = new EventEmitter<number>();
  // @Output() ''

  constructor() {}

  ngOnInit() {
    this.goalDisplay = this.value;
  }

  onSliderValueChange(event: MatSliderChange) {
    this.goalDisplay = event.value;
    this.value = event.value;
    // this.dailyPlan.actualHours = event.value;
    this.valueChange.emit(event.value);
  }

  overachieve() {
    this.goalDisplay = 100;
  }
}
