import { Component, OnInit, OnDestroy, Renderer2, Input } from "@angular/core";
import { DailyPlan } from "../models/daily-plan";
import { TrackingItem } from "../models/tracking-item";
import { Store, select } from "@ngrx/store";
import { State, getSelectedWeekday, getSelectedDay } from "../reducers";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-reason",
  templateUrl: "./reason.component.html",
  styleUrls: ["./reason.component.css"]
})
export class ReasonComponent implements OnInit, OnDestroy {
  public activities: any;
  private unsubscribe$: Subject<void> = new Subject<void>();
  @Input()
  dailyPlan: DailyPlan;

  constructor(private renderer: Renderer2, private store: Store<State>) {}

  ngOnInit() {
    this.activities = [
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

    this.store
      .pipe(
        select(getSelectedDay),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((selectedDay: Date) => {
        console.log("The Selected Date Changed to: ", selectedDay);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  debug() {
    console.log("Plan Reasons: ", this.dailyPlan.reasons);
  }

  onActivityToggled(activity: TrackingItem) {
    console.log("Activity toggled: ", activity);
    const name = activity.name;
    const index = this.dailyPlan.reasons.indexOf(name);
    if (index === -1 && activity.selected) {
      this.dailyPlan.reasons.push(name);
    } else if (index > -1 && !activity.selected) {
      this.dailyPlan.reasons.splice(index, 1);
    }
  }
}
