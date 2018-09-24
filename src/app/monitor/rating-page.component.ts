import { Component, OnInit, Input } from "@angular/core";
import { MatSliderChange } from "@angular/material";
import { DailyPlan } from "../models/daily-plan";

@Component({
  selector: "app-rating-page",
  templateUrl: "./rating-page.component.html",
  styleUrls: ["./rating-page.component.css"]
})
export class RatingPageComponent implements OnInit {
  value = 50;
  goalDisplay = 0;

  @Input() dailyPlan: DailyPlan;

  constructor() {}

  ngOnInit() {}

  onSliderValueChange(event: MatSliderChange) {
    this.goalDisplay = event.value;
    this.dailyPlan.actualTimeCommitment = event.value;
  }
}
