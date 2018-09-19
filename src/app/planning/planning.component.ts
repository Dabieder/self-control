import { Component, OnInit } from "@angular/core";
import { Time } from "@angular/common";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.component.html",
  styleUrls: ["./planning.component.css"]
})
export class PlanningComponent implements OnInit {
  todayLearn: Time;
  weeklyLearn: Time;

  constructor() {}

  ngOnInit() {}

  onTimeValueChange(event: any) {
    console.log("time value change event", event);
  }

  submitPlan() {
    console.log("Submitting Plan");
  }
}
