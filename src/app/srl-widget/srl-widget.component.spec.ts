import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SrlWidgetComponent } from "./srl-widget.component";
import { TestingModule } from "../../testing/utils";
import { MaterialModule } from "../material.module";
import { PlanningComponent } from "../planning/planning.component";
import { MonitorPageComponent } from "../monitor/monitor-page.component";
import { ReflectionPageComponent } from "../reflection-page/reflection-page.component";
import { WeekdayComponent } from "../planning/weekday.component";
import { RatingPageComponent } from "../monitor/rating-page.component";
import { ReasonComponent } from "../monitor/reason.component";
import { SrlChartComponent } from "../srl-chart/srl-chart.component";
import { LearningGoalChartComponent } from "../learning-goal-chart/learning-goal-chart.component";
import { TrackingItemComponent } from "../activity-item/tracking-item.component";
import { ChartsModule } from "ng2-charts";

describe("SrlWidgetComponent", () => {
  let component: SrlWidgetComponent;
  let fixture: ComponentFixture<SrlWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, MaterialModule, ChartsModule],
      declarations: [
        SrlWidgetComponent,
        PlanningComponent,
        MonitorPageComponent,
        ReflectionPageComponent,
        WeekdayComponent,
        RatingPageComponent,
        ReasonComponent,
        SrlChartComponent,
        LearningGoalChartComponent,
        TrackingItemComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrlWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
