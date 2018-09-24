import { Component, OnInit } from "@angular/core";
import { WeekService } from "../week.service";
import { Store } from "@ngrx/store";
import { PlanningWidgetState, State } from "../reducers";
import {
  SelectedWeekChangeAction,
  WeeklyPlansUpdatedAction,
  SelectedWeeklyPlanChangeAction
} from "../app.actions";
import { WeeklyPlanningService } from "../weekly-planning.service";
import { WeeklyPlan, WeeklyPlans } from "../models/weekly-plan";

@Component({
  selector: "app-week-selection",
  templateUrl: "./week-selection.component.html",
  styleUrls: ["./week-selection.component.scss"]
})
export class WeekSelectionComponent implements OnInit {
  selectedWeekDisplay = "01.11.18 - 07.11.18";
  selectedWeek: Date;
  weeklyPlans: WeeklyPlans;

  constructor(
    private weekService: WeekService,
    private weeklyPlanningService: WeeklyPlanningService,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.selectCurrentWeek();

    this.store.select(state => state.srlWidget.weeklyPlans).subscribe(plans => {
      this.weeklyPlans = plans;
      this.checkAndAddWeekToPlan();
    });
  }

  checkAndAddWeekToPlan() {
    if (this.weeklyPlans) {
      const weekAsKey = WeekService.toDictionaryKey(this.selectedWeek);
      if (!this.weeklyPlans[weekAsKey]) {
        const newPlan = WeeklyPlan.createForWeek(this.selectedWeek);
        this.weeklyPlans[weekAsKey] = newPlan;
        this.store.dispatch(
          new WeeklyPlansUpdatedAction({ weeklyPlans: this.weeklyPlans })
        );
      }
    }
  }

  selectNextWeek() {
    this.selectedWeek = WeekService.nextWeekDate(this.selectedWeek);
    this.selectedWeekDisplay = WeekService.toDisplay(this.selectedWeek);
    this.checkAndAddWeekToPlan();
    this.dispatchWeekChange();
  }

  selectPreviousWeek() {
    this.selectedWeek = WeekService.previousWeekDate(this.selectedWeek);
    this.selectedWeekDisplay = WeekService.toDisplay(this.selectedWeek);
    this.checkAndAddWeekToPlan();
    this.dispatchWeekChange();
  }

  selectCurrentWeek() {
    this.selectedWeek = WeekService.getWeekForDay(new Date(Date.now()));
    this.selectedWeekDisplay = WeekService.toDisplay(this.selectedWeek);
    console.log("this.selectedweek", this.selectedWeek);
    this.checkAndAddWeekToPlan();
    this.dispatchWeekChange();
  }

  dispatchWeekChange() {
    this.store.dispatch(
      new SelectedWeekChangeAction({ selectedWeek: this.selectedWeek })
    );
  }
}
