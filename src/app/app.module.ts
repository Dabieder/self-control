import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { RatingPageComponent } from "./monitor/rating-page.component";
import { TrackActivitiesComponent } from "./activities/track-activities.component";
import { MaterialModule } from "./material.module";
import { ReasonComponent } from "./monitor/reason.component";
import { PlanningComponent } from "./planning/planning.component";
import "hammerjs";
import { TrackingItemComponent } from "./activity-item/tracking-item.component";
import { MoodComponent } from "./mood/mood.component";
import { SrlChartComponent } from "./srl-chart/srl-chart.component";
import { ChartsModule } from "ng2-charts";
import { ReflectionPageComponent } from "./reflection-page/reflection-page.component";
import { LearningGoalChartComponent } from "./learning-goal-chart/learning-goal-chart.component";
import { WeekdayComponent } from "./planning/weekday.component";
import { MonitorPageComponent } from "./monitor/monitor-page.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./app.effects";
import { WeekSelectionComponent } from "./planning/week-selection.component";
import { SrlWidgetComponent } from "./srl-widget/srl-widget.component";
import { WeekdaySelectionComponent } from "./monitor/weekday-selection.component";
import { ApiService } from "./api.service";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: "ratings",
    component: RatingPageComponent
  },
  {
    path: "activities",
    component: TrackActivitiesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RatingPageComponent,
    TrackActivitiesComponent,
    ReasonComponent,
    PlanningComponent,
    TrackingItemComponent,
    MoodComponent,
    SrlChartComponent,
    ReflectionPageComponent,
    LearningGoalChartComponent,
    WeekdayComponent,
    MonitorPageComponent,
    WeekSelectionComponent,
    SrlWidgetComponent,
    WeekdaySelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    RouterModule.forRoot(routes),
    ChartsModule,
    StoreModule.forRoot(reducers),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          name: "SRL Widget"
        })
      : [],
    EffectsModule.forRoot([AppEffects])
  ],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
