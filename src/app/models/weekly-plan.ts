import { Time } from "@angular/common";
import { DailyPlan } from "./daily-plan";
import { WeekService } from "../week.service";

export class WeeklyPlan {
  weekStartDate: Date;
  timePerWeek: Time;
  timeByDays: DailyPlan[] = [];

  static createDefault() {
    const service = new WeekService();
    const plan = new WeeklyPlan();
    plan.weekStartDate = service.getWeekForDay(new Date(Date.now()));

    for (let i = 0; i < 7; i++) {
      console.log("Pushing plans");
      const day = new Date(plan.weekStartDate.getDate() + i);
      plan.timeByDays.push(new DailyPlan(day, 0));
    }
    return plan;
  }
}
