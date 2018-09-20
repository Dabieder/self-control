import { Component, OnInit } from "@angular/core";
import { Time } from "@angular/common";
import { Store, select } from "@ngrx/store";
import { PlanningWidgetState, getSelectedWeek, State } from "../reducers";
import { map, take } from "rxjs/operators";
import { WeeklyPlan } from "../models/weekly-plan";
import { SubmitWeeklyPlanAction } from "../app.actions";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.component.html",
  styleUrls: ["./planning.component.css"]
})
export class PlanningComponent implements OnInit {
  weeklyLearn: Time;
  weeklyPlan: WeeklyPlan;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.select(s => s.srlWidget.weeklyPlans).subscribe(weeklyPlans => {
      console.log("Weekly Plans are: ", weeklyPlans);
    });

    this.store.select(s => s.srlWidget.selectedWeek).subscribe(week => {
      console.log("Selected Week in Planning Component: ", week);
    });
  }

  onTimeValueChange(event: any) {
    console.log("time value change event", event);
  }

  submitPlan() {
    console.log("Submitting Plan");
    this.store.dispatch(
      new SubmitWeeklyPlanAction({ weeklyPlan: this.weeklyPlan })
    );
  }
}
