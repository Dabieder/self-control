import { WeekService } from "../week.service";

export enum WeekDays {
  Monday = 0,
  Tuesday = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
}
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
