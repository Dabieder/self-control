import { Plan } from "./plan";

export class DailyPlan implements Plan {
  public date: Date;
  public plannedHours: number;
  public actualHours = 0;
  public reasons: String[] = [];
  constructor(day: Date, timeCommitment: number) {
    this.date = day;
    this.plannedHours = timeCommitment;
  }
}
