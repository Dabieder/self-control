import { Component, OnDestroy, OnInit } from "@angular/core";
import { WeeklyPlanningService } from "./services/weekly-planning.service";
import { State } from "./reducers";
import { Store } from "@ngrx/store";
import * as moment from "moment";
import { RequestDataFromBackendAction } from "./services/app.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(
    private weeklyPlanningService: WeeklyPlanningService,
    private store: Store<State>
  ) {
    this.weeklyPlanningService.initialize();
    this.initMoment();
  }

  ngOnInit(): void {
    this.store.dispatch(new RequestDataFromBackendAction());
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
