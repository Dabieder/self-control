import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State, getCurrentWeeklyPlan } from "../reducers";
import { WeekDay } from "@angular/common";
import { WeeklyPlan } from "../models/weekly-plan";

@Component({
  selector: "app-monitor-page",
  templateUrl: "./monitor-page.component.html",
  styleUrls: ["./monitor-page.component.scss"]
})
export class MonitorPageComponent implements OnInit {
  weeklyPlan$ = this.store.select(getCurrentWeeklyPlan);
  selectedDay: WeekDay;

  weeklyPlan: WeeklyPlan;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.select(getCurrentWeeklyPlan).subscribe(plan => {
      
    });
  }

  submitMonitor() {
    console.log("Submitting Monitoring");
  }

  daySelect(day: number) {
    this.selectedDay = day;

  }
}
