import { Component, OnInit } from "@angular/core";
import { MatSliderChange } from "@angular/material";

@Component({
  selector: "app-rating-page",
  templateUrl: "./rating-page.component.html",
  styleUrls: ["./rating-page.component.css"]
})
export class RatingPageComponent implements OnInit {
  value = 50;
  goalDisplay = 0;
  constructor() {}

  ngOnInit() {}

  onSliderValueChange(event: MatSliderChange) {
    this.goalDisplay = event.value;
  }
}
