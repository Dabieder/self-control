import { Component, OnInit, Input, Output, EventEmitter, Renderer2, ViewChild } from "@angular/core";
import { MatSliderChange } from "@angular/material";
import { DailyPlan } from "../models/daily-plan";
import { State } from "../reducers";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-weekday",
  templateUrl: "./weekday.component.html",
  styleUrls: ["./weekday.component.scss"]
})
export class WeekdayComponent implements OnInit {
  @Input()
  name: string;
  @Output()
  timeValueChange = new EventEmitter<DailyPlan>();
  hoursDisplay = 0;
  @Input()
  dailyPlan = new DailyPlan(new Date(), 0);
  @ViewChild("container") container;
  expanded: boolean;

  constructor(private store: Store<State>, private renderer: Renderer2) {}

  ngOnInit() {
    console.log("this daily plan is: ", this.dailyPlan);
  }

  onSliderValueChange(event: MatSliderChange) {
    console.log("Slider Value Change event: ", event);
    this.dailyPlan.plannedTimeCommitment = event.value;
    this.timeValueChange.emit(this.dailyPlan);
    this.hoursDisplay = event.value;
  }

  onSliderValueInput(event: MatSliderChange) {
    this.hoursDisplay = event.value;
  }

  dayExpandToggle(event: any) {
    this.expanded = !this.expanded;
  }
}
