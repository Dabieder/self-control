import { Component, OnInit, OnDestroy } from "@angular/core";
import { Time } from "@angular/common";
import { Store, select } from "@ngrx/store";
import { State, getCurrentWeeklyPlan } from "../reducers";
import { map, take, takeUntil } from "rxjs/operators";
import { WeeklyPlan } from "../models/weekly-plan";
import { SubmitWeeklyPlanAction } from "../services/app.actions";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.component.html",
  styleUrls: ["./planning.component.css"]
})
export class PlanningComponent implements OnInit, OnDestroy {
  weeklyPlan$ = this.store.select(getCurrentWeeklyPlan);
  weeklyPlan: WeeklyPlan;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store
      .pipe(
        select(getCurrentWeeklyPlan),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((weeklyPlan: WeeklyPlan) => {
        this.weeklyPlan = weeklyPlan;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onTimeValueChange(event: any) {
    console.log("time value change event", event);
  }

  setTotalTimeValue(event: any) {
    let totalTime = 0;
    for (const time of this.weeklyPlan.dailyPlans) {
      totalTime += time.plannedHours;
    }
    this.weeklyPlan.plannedHours = totalTime;
  }

  submitPlan() {
    console.log("Submitting Plan");
    // this.store.dispatch(
    //   new SubmitWeeklyPlanAction({ weeklyPlan: this.weeklyPlan })
    // );
  }
}
