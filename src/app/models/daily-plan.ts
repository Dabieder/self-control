export class DailyPlan {
  public day: Date;
  public timeCommitment: number;
  public actualTimeCommitment = 0;
  constructor(day: Date, timeCommitment: number) {
    this.day = day;
    this.timeCommitment = timeCommitment;
  }
}
