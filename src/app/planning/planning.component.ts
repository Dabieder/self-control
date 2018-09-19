import { Component, OnInit } from "@angular/core";
import { Time } from "@angular/common";
import { Store } from "@ngrx/store";
import { PlanningState } from "../reducers";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.component.html",
  styleUrls: ["./planning.component.css"]
})
export class PlanningComponent implements OnInit {
  todayLearn: Time;
  weeklyLearn: Time;

  constructor(store: Store<PlanningState>) {}

  ngOnInit() {}

  onTimeValueChange(event: any) {
    console.log("time value change event", event);
  }

  submitPlan() {
    console.log("Submitting Plan");
  }
}
