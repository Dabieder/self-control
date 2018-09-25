import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { WeekSelectionComponent } from "./planning/week-selection.component";
import { SrlWidgetComponent } from "./srl-widget/srl-widget.component";
import { MonitorPageComponent } from "./monitor/monitor-page.component";
import { ReflectionPageComponent } from "./reflection-page/reflection-page.component";
import { PlanningComponent } from "./planning/planning.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MaterialModule } from "./material.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, MatTabsModule],
      declarations: [
        AppComponent,
        WeekSelectionComponent,
        SrlWidgetComponent,
        MonitorPageComponent,
        ReflectionPageComponent,
        PlanningComponent
      ]
    }).compileComponents();
  }));
  // it("should create the app", async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
});
