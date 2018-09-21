import { Component } from "@angular/core";
import { WeeklyPlanningService } from "./weekly-planning.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  constructor(private weeklyPlanningService: WeeklyPlanningService) {
    this.weeklyPlanningService.initialize();
  }
}
