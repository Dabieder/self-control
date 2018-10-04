import { Time } from "@angular/common";
import { DailyPlan } from "./daily-plan";
import { WeekService } from "../services/week.service";
import { Plan } from "./plan";

export class WeeklyPlan implements Plan {
  public weekStartDate: Date;
  public plannedHours = 0;
  public actualHours = 0;
  public reasons: String[] = [];
  public dailyPlans: DailyPlan[] = [];
  public learningGoal: string;

  static createForWeek(week: Date) {
    const plan = new WeeklyPlan();

    const weekStartDate = WeekService.getWeekForDay(week);
    plan.weekStartDate = WeekService.getWeekForDay(week);
    for (let i = 0; i < 7; i++) {
      const day = new Date(plan.weekStartDate);
      day.setDate(plan.weekStartDate.getDate() + i);

      const dailyPlan = new DailyPlan(day, 0);
      plan.dailyPlans.push(dailyPlan);
      plan.plannedHours = 0;
    }
    return plan;
  }
}

export class WeeklyPlans {
  [week: string]: WeeklyPlan;
}
