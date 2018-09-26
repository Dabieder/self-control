import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { takeUntil } from "rxjs/operators";
import { WeeklyPlan, WeeklyPlans } from "./models/weekly-plan";
import { WeekService } from "./week.service";
import { TrackingItem } from "./models/tracking-item";
import { Subject } from "rxjs";
import {
  State,
  getSelectedWeekday,
  getSelectedDay,
  getCurrentDailyPlan,
  getWeeklyPlans,
  getWidgetState,
  PlanningWidgetState,
  getSelectedWeek
} from "./reducers";
import { DailyPlan } from "./models/daily-plan";
import { WeeklyPlansUpdatedAction } from "./app.actions";

@Injectable({
  providedIn: "root"
})
export class WeeklyPlanningService {
  weeklyPlans: WeeklyPlans;
  selectedWeeklyPlan: WeeklyPlan;
  selectedDailyPlan: DailyPlan;
  selectedDayIndex: number;
  selectedWeek: string;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private store: Store<State>, private weekService: WeekService) {
    this.initialize();
  }

  initialize() {
    // this.store.select(store => store.srlWidget).subscribe(widget => {
    //   this.selectedWeeklyPlan = widget.selectedWeeklyPlan;
    //   const weekAsKey = this.weekService.toDictionaryKey(
    //     widget.selectedWeeklyPlan.weekStartDate
    //   );
    //   if (widget.weeklyPlans[weekAsKey]) {
    //   } else {
    //   }
    // });
    this.store
      .pipe(
        select(getWeeklyPlans),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(plans => {
        this.weeklyPlans = { ...plans };
      });

    this.store
      .pipe(
        select(getSelectedDay),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(day => {
        this.selectedDayIndex = WeekService.dayToIndex(day);
      });

    this.store
      .pipe(
        select(getSelectedWeek),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(week => {
        this.selectedWeek = WeekService.toDictionaryKey(week);
      });

    this.store
      .pipe(
        select(getCurrentDailyPlan),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(dailyPlan => {
        this.selectedDailyPlan = { ...dailyPlan };
      });
  }

  destroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onActivityToggled(activity: TrackingItem) {

    const name = activity.name;
    const index = this.selectedDailyPlan.reasons.indexOf(name);
    if (index === -1 && activity.selected) {
      this.selectedDailyPlan.reasons.push(name);
    } else if (index > -1 && !activity.selected) {
      this.selectedDailyPlan.reasons.splice(index, 1);
    }

    this.weeklyPlans[this.selectedWeek].dailyPlans[
      this.selectedDayIndex
    ] = this.selectedDailyPlan;

    this.store.dispatch(
      new WeeklyPlansUpdatedAction({ weeklyPlans: {...this.weeklyPlans} })
    );
  }
}
