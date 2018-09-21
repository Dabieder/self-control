import { Time } from "@angular/common";
import { DailyPlan } from "./daily-plan";
import { WeekService } from "../week.service";

export class WeeklyPlan {
  public weekStartDate: Date;
  public hoursPerWeek = 0;
  public plannedTimeByDays: DailyPlan[] = [];
  public actualTimeByDays: DailyPlan[] = [];


  static createForWeek(week: Date) {
    const plan = new WeeklyPlan();
    const weekStartDate = WeekService.getWeekForDay(week);

    for (let i = 0; i < 7; i++) {
      const day = new Date(plan.weekStartDate);
      day.setDate(weekStartDate.getDate() + i);
      const dailyPlan = new DailyPlan(day, 0);
      plan.plannedTimeByDays.push(dailyPlan);
      plan.hoursPerWeek = 0;
    }
    return plan;
  }
}

export interface WeeklyPlans {
  [week: string]: WeeklyPlan;
}
