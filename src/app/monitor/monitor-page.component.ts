import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State, getCurrentWeeklyPlan } from "../reducers";
import { WeekDay } from "@angular/common";
import { WeeklyPlan } from "../models/weekly-plan";
import { WeekService } from "../services/week.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { SelectedDayChangeAction } from "../services/app.actions";

@Component({
  selector: "app-monitor-page",
  templateUrl: "./monitor-page.component.html",
  styleUrls: ["./monitor-page.component.scss"]
})
export class MonitorPageComponent implements OnInit, OnDestroy {
  // weeklyPlan$ = this.store.select(getCurrentWeeklyPlan);
  private unsubscribe$: Subject<void> = new Subject<void>();

  selectedDay: WeekDay;

  weeklyPlan: WeeklyPlan;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.setCurrentDay();

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

  setCurrentDay() {
    this.selectedDay = new Date(Date.now()).getDay() % 6;
  }

  submitMonitor() {
    console.log("Submitting Monitoring: ", this.weeklyPlan);
    // this.store.dispatch(new )
  }

  daySelect(day: number) {
    this.selectedDay = day;
    const date = this.weeklyPlan.dailyPlans[this.selectedDay].date;
    this.store.dispatch(new SelectedDayChangeAction({ selectedDay: date }));
  }
}
