import { Time } from "@angular/common";
import { DailyPlan } from "./daily-plan";

export class WeeklyPlan {
  weekStartDate: Date;
  timePerWeek: Time;
  timeByDays: [DailyPlan];
}
