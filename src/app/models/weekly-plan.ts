import { Time } from "@angular/common";

export interface WeeklyPlan {
  timePerWeek: Time;
  timeByDays: [number];
}
