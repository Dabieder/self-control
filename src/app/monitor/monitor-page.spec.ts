import { TestBed, inject, async } from "@angular/core/testing";

import { MonitorPageComponent } from "./monitor-page.component";
import { MockStore } from "../../testing/utils";
import { State, PlanningWidgetState } from "../reducers";
import { Store } from "@ngrx/store";
import { WeeklyPlan, WeeklyPlans } from "../models/weekly-plan";
import { WeekService } from "../services/week.service";

describe("MonitorPageComponent", () => {
  let store: MockStore<PlanningWidgetState>;
  const todayWeek = WeekService.getWeekForDay(new Date(Date.now()));

  const plans = new WeeklyPlans();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: Store, useClass: MockStore }]
    }).compileComponents();
  }));

  beforeEach(inject([Store], (mockStore: MockStore<PlanningWidgetState>) => {
    store = mockStore;
    store.setState({
      selectedWeek: todayWeek,
      selectedDay: todayWeek,
      weeklyPlans: plans
    });
  }));
});
