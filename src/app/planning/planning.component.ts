import { Component, OnInit } from "@angular/core";
import { Time } from "@angular/common";
import { Store, select } from "@ngrx/store";
import { State, getCurrentWeeklyPlan } from "../reducers";
import { map, take } from "rxjs/operators";
import { WeeklyPlan } from "../models/weekly-plan";
import { SubmitWeeklyPlanAction } from "../app.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.component.html",
  styleUrls: ["./planning.component.css"]
})
export class PlanningComponent implements OnInit {
  weeklyPlan$ = this.store.select(getCurrentWeeklyPlan);
  weeklyPlan: WeeklyPlan;

  constructor(private store: Store<State>) {}

  ngOnInit() {}

  onTimeValueChange(event: any) {
    console.log("time value change event", event);
  }

  submitPlan() {
    console.log("Submitting Plan");
    // this.store.dispatch(
    //   new SubmitWeeklyPlanAction({ weeklyPlan: this.weeklyPlan })
    // );
  }
}
