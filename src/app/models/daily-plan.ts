export class DailyPlan {
  public day: Date;
  public plannedTimeCommitment: number;
  public actualTimeCommitment = 0;
  public reasonsForNotReachingGoals: String[] = [];
  constructor(day: Date, timeCommitment: number) {
    this.day = day;
    this.plannedTimeCommitment = timeCommitment;
  }
}
