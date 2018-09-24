import { Time } from "@angular/common";
import { DailyPlan } from "./daily-plan";
import { WeekService } from "../week.service";

export class WeeklyPlan {
  public weekStartDate: Date;
  public hoursPerWeek = 0;
  public dailyPlans: DailyPlan[] = [];

  static createForWeek(week: Date) {
    const plan = new WeeklyPlan();

    plan.weekStartDate = WeekService.getWeekForDay(week);
    for (let i = 0; i < 7; i++) {
      const day = new Date(plan.weekStartDate);
      day.setDate(plan.weekStartDate.getDate() + i);

      const dailyPlan = new DailyPlan(day, 0);
      plan.dailyPlans.push(dailyPlan);
      plan.hoursPerWeek = 0;
    }
    return plan;
  }
}

export interface WeeklyPlans {
  [week: string]: WeeklyPlan;
}
