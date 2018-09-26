import { Component } from "@angular/core";
import { WeeklyPlanningService } from "./weekly-planning.service";
import { State } from "./reducers";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor(private weeklyPlanningService: WeeklyPlanningService,
    private store: Store<State>) {
    this.weeklyPlanningService.initialize();
  }

  submit() {
    console.log("submitting everything");
  }
}
