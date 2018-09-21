import { WeekService } from "../week.service";

export class Week {
  startDate: Date;
  isoKey: string;

  public static createForDate(date: Date) {
    const week = new Week();

    week.startDate = WeekService.getWeekForDay(date);
    week.isoKey = WeekService.toDictionaryKey(week.startDate);

    return week;
  }
}
