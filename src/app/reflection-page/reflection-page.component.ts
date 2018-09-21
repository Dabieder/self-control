import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  PlanningWidgetState,
  getSelectedWeek,
  State,
  getWeeklyPlans,
  getCurrentWeeklyPlan
} from "../reducers";

@Component({
  selector: 'app-reflection-page',
  templateUrl: './reflection-page.component.html',
  styleUrls: ['./reflection-page.component.scss']
})
export class ReflectionPageComponent implements OnInit {

  weeklyPlan$ = this.store.select(getCurrentWeeklyPlan);

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

}
