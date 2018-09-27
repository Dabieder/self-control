import { Component, OnDestroy } from "@angular/core";
import { WeeklyPlanningService } from "./weekly-planning.service";
import { State } from "./reducers";
import { Store } from "@ngrx/store";
import * as moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnDestroy {
  title = "app";

  constructor(
    private weeklyPlanningService: WeeklyPlanningService,
    private store: Store<State>
  ) {
    this.weeklyPlanningService.initialize();
    this.initMoment();
  }

  ngOnDestroy(): void {
    this.weeklyPlanningService.destroy();
  }

  submit() {
    console.log("submitting everything");
  }

  initMoment() {
    moment.locale("de");
  }
}
