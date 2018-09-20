import { Component, OnInit } from "@angular/core";
import { WeekService } from "../week.service";
import { Store } from "@ngrx/store";
import { PlanningWidgetState, State } from "../reducers";
import { SelectedWeekChangeAction } from "../app.actions";

@Component({
  selector: "app-week-selection",
  templateUrl: "./week-selection.component.html",
  styleUrls: ["./week-selection.component.scss"]
})
export class WeekSelectionComponent implements OnInit {
  selectedWeekDisplay = "01.11.18 - 07.11.18";
  selectedWeek: Date;

  constructor(private weekService: WeekService, private store: Store<State>) {}

  ngOnInit() {
    this.selectCurrentWeek();

    this.store
      .select(state => state.srlWidget.weeklyPlans)
      .subscribe(plans => {
        console.log("plans: ", plans);
      });
  }

  selectNextWeek() {
    this.selectedWeek = this.weekService.nextWeekDate(this.selectedWeek);
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
    this.dispatchWeekChange();
  }

  selectPreviousWeek() {
    this.selectedWeek = this.weekService.previousWeekDate(this.selectedWeek);
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
    this.dispatchWeekChange();
  }

  selectCurrentWeek() {
    this.selectedWeek = this.weekService.getWeekForDay(new Date());
    this.selectedWeekDisplay = this.weekService.toDisplay(this.selectedWeek);
    this.dispatchWeekChange();
  }

  dispatchWeekChange() {
    this.store.dispatch(
      new SelectedWeekChangeAction({ selectedWeek: this.selectedWeek })
    );
  }
}
