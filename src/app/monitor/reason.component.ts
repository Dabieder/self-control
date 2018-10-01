import { Component, OnInit, OnDestroy, Renderer2, Input } from "@angular/core";
import { DailyPlan } from "../models/daily-plan";
import { TrackingItem } from "../models/tracking-item";
import { Store, select } from "@ngrx/store";
import { State, getCurrentDailyPlan } from "../reducers";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { WeeklyPlans } from "../models/weekly-plan";
import { WeeklyPlanningService } from "../services/weekly-planning.service";

@Component({
  selector: "app-reason",
  templateUrl: "./reason.component.html",
  styleUrls: ["./reason.component.css"]
})
export class ReasonComponent implements OnInit, OnDestroy {
  public reasonsNegative: any;
  public reasonsPositive: any;
  private unsubscribe$: Subject<void> = new Subject<void>();
  @Input()
  dailyPlan: DailyPlan;
  weeklyPlans: WeeklyPlans;
  week: string;
  day: number;

  constructor(
    private renderer: Renderer2,
    private weeklyService: WeeklyPlanningService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.reasonsNegative = [
      {
        name: "Other responsibilities",
        icon: "face",
        selected: true
      },
      {
        name: "More time-consuming than expected",
        icon: "settings_input_antenna",
        selected: false
      },
      {
        name: "Need for group discussion",
        icon: "group",
        selected: false
      },
      // {
      //   name: "Work",
      //   icon: "attach_money",
      //   selected: false
      // },
      {
        name: "Lack of information",
        icon: "contact_support",
        selected: false
      }
    ];

    this.reasonsPositive = [
      {
        name: "Good Time Management",
        icon: "group",
        selected: false
      },
      {
        name: "The tasks were easy",
        icon: "settings_input_antenna",
        selected: false
      },
      {
        name: "Productive Collaboration",
        icon: "group",
        selected: false
      },
      {
        name: "The tasks were well-suited for me",
        icon: "contact_support",
        selected: false
      }
    ];

    this.store
      .pipe(
        select(getCurrentDailyPlan),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((selectedDay: DailyPlan) => {
        console.log("The Selected Date Changed to: ", selectedDay);
        this.dailyPlan = selectedDay;

        for (const activity of this.reasonsNegative) {
          const indexOf = this.dailyPlan.reasons.indexOf(activity.name);
          activity.selected = indexOf > -1;
        }

        console.log("Comparing Activities", this.reasonsNegative);
        console.log("With daily plan: ", this.dailyPlan.reasons);
      });
    // this.store
    // .pipe(
    //   select(getSelectedDay, getSelectedWeek, getWeeklyPlans),
    //   takeUntil
    // )

    // this.store
    //   .pipe(
    //     select(getWidgetState),
    //     takeUntil(this.unsubscribe$)
    //   )
    //   .subscribe((state: PlanningWidgetState) => {
    //     this.weeklyPlans = state.weeklyPlans;

    //     // this.week = WeekService.toDictionaryKey(state.selectedWeek);
    //     // this.day = WeekService.dayToIndex(state.selectedDay);
    //     // this.dailyPlan = state.weeklyPlans[this.week][this.day];

    //     // for (const activity of this.activities) {
    //     //   const indexOf = this.dailyPlan.reasons.indexOf(activity);
    //     //   activity.selected = indexOf > -1;
    //     // }
    //   });'
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onActivityToggled(activity: TrackingItem) {
    this.weeklyService.onActivityToggled(activity);
  }
}
