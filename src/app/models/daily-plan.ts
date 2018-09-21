export class DailyPlan {
  public day: Date;
  public timeCommitment: number;
  constructor(day: Date, timeCommitment: number) {
    this.day = day;
    this.timeCommitment = timeCommitment;
  }
}
