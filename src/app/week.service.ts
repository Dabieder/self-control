import { Injectable } from "@angular/core";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class WeekService {
  public static dateFormatOptionsWeekSelector: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    year: "2-digit",
    month: "2-digit"
  };
  public static defaultLocale = "de-DE";
  public static WeekStartOffset = 1;

  constructor() {}

  public static toDisplay(week: Date) {
    const startDay = week.toLocaleDateString(
      this.defaultLocale,
      this.dateFormatOptionsWeekSelector
    );
    const endDate = new Date();
    endDate.setDate(week.getDate() + 6);
    const endDay = endDate.toLocaleDateString(
      this.defaultLocale,
      this.dateFormatOptionsWeekSelector
    );
    return startDay + " - " + endDay;
  }

  public static toDictionaryKey(week: Date) {
    return moment(week).format("YYYYMMDD");
  }

  public static dayToIndex(day: Date) {
    return (day.getDay() - this.WeekStartOffset) % 6;
  }

  public static getWeekForDay(day: Date): Date {
    const daysToSubtract = (day.getDay() - this.WeekStartOffset) % 6;
    const startDate = new Date(day.setDate(day.getDate() - daysToSubtract));
    startDate.setHours(1, 1, 1, 1);
    return startDate;
  }

  public static previousWeekDate(week: Date) {
    return new Date(week.setDate(week.getDate() - 7));
  }

  public static nextWeekDate(week: Date) {
    return new Date(week.setDate(week.getDate() + 7));
  }

  public static TodayDate() {
    return new Date(Date.now());
  }
}
