import { Time } from "@angular/common";

export interface WeeklyPlan {
  weekStartDate: Date;
  timePerWeek: Time;
  timeByDays: [number];
}
