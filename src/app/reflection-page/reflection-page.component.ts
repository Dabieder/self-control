import { Component, OnInit, OnDestroy } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  PlanningWidgetState,
  getSelectedWeek,
  State,
  getWeeklyPlans,
  getCurrentWeeklyPlan
} from "../reducers";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { WeeklyPlans } from "../models/weekly-plan";

@Component({
  selector: "app-reflection-page",
  templateUrl: "./reflection-page.component.html",
  styleUrls: ["./reflection-page.component.scss"]
})
export class ReflectionPageComponent implements OnInit, OnDestroy {
  weeklyPlan$ = this.store.select(getCurrentWeeklyPlan);
  weeklyPlans: WeeklyPlans;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store
      .pipe(
        select(getWeeklyPlans),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((weeklyPlans: WeeklyPlans) => {
        this.weeklyPlans = {...weeklyPlans};
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
