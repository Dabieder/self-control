import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { RatingPageComponent } from "./rating/rating-page.component";
import { TrackActivitiesComponent } from "./activities/track-activities.component";
import { MaterialModule } from "./material.module";
import { ReasonComponent } from './reason/reason.component';
import { PlanningComponent } from './planning/planning.component';
import "hammerjs";
import { TrackingItemComponent } from './activity-item/tracking-item.component';

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
  declarations: [AppComponent, RatingPageComponent, TrackActivitiesComponent, ReasonComponent, PlanningComponent, TrackingItemComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register("/ngsw-worker.js", {
      enabled: environment.production
    }),
    RouterModule.forRoot(routes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
