import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State, getCurrentWeeklyPlan, getWeeklyPlans } from "../reducers";
import { takeUntil } from "rxjs/operators";
import { WeeklyPlan, WeeklyPlans } from "../models/weekly-plan";
import {
  WeeklyPlansUpdatedAction
} from "../services/app.actions";
import { Subject } from "rxjs";
import { WeekService } from "../services/week.service";

@Component({
  selector: "app-planning",
  templateUrl: "./planning.component.html",
  styleUrls: ["./planning.component.scss"]
})
export class PlanningComponent implements OnInit, OnDestroy {
  weeklyPlan$ = this.store.select(getCurrentWeeklyPlan);
  weeklyPlan: WeeklyPlan;
  weeklyPlans: WeeklyPlans;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store
      .pipe(
        select(getCurrentWeeklyPlan),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((weeklyPlan: WeeklyPlan) => {
        this.weeklyPlan = { ...weeklyPlan };
      });

    this.store
      .pipe(
        select(getWeeklyPlans),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((weeklyPlans: WeeklyPlans) => {
        this.weeklyPlans = { ...weeklyPlans };
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onTimeValueChange(event: any) {
    console.log("time value change event", event);
    this.setTotalTimeValue();
    this.updateWeeklyPlan();
  }

  setTotalTimeValue() {
    let totalTime = 0;
    for (const time of this.weeklyPlan.dailyPlans) {
      totalTime += time.plannedHours;
    }
    this.weeklyPlan.plannedHours = totalTime;
    console.log("planned hours: ", this.weeklyPlan.plannedHours);
  }

  updateWeeklyPlan() {
    // this.weeklyPlans[]

    this.store.dispatch(new WeeklyPlansUpdatedAction({ weeklyPlans: null }));
  }

  submitPlan() {
    console.log("Submitting Plan");
    const weekKey = WeekService.toDictionaryKey(this.weeklyPlan.weekStartDate);
    this.weeklyPlans[weekKey] = this.weeklyPlan;
    this.store.dispatch(
      new WeeklyPlansUpdatedAction({ weeklyPlans: this.weeklyPlans })
    );
  }
}
