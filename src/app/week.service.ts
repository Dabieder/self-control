import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WeekService {
  public static dateFormatOptionsWeekSelector: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    year: "2-digit",
    month: "2-digit"
  };
  public static defaultCocale = "de-DE";
  /**
   * Whether the week starts on on monday(1) or sunday(0)
   */
  public static FirstWeekDay = 1;

  constructor() {}

  public static toDisplay(week: Date) {
    const startDay = week.toLocaleDateString(
      this.defaultCocale,
      this.dateFormatOptionsWeekSelector
    );
    const endDate = new Date();
    endDate.setDate(week.getDate() + 7);
    const endDay = endDate.toLocaleDateString(
      this.defaultCocale,
      this.dateFormatOptionsWeekSelector
    );
    return startDay + " - " + endDay;
  }

  public static toDictionaryKey(week: Date) {
    return week.toISOString().substring(0, 10);
  }

  public static getWeekForDay(day: Date): Date {
    const daysToSubtract = day.getDay() - this.FirstWeekDay;
    const startDate = new Date(day.setDate(day.getDate() - daysToSubtract));
    startDate.setHours(0, 0, 0, 0);
    return startDate;
  }
  /**
   *
   * @param day The day for which to return the previous monday for
   * @return The monday that starts the week for this day
   */

  public static previousWeekDate(week: Date) {
    return new Date(week.setDate(week.getDate() - 7));
  }

  public static nextWeekDate(week: Date) {
    return new Date(week.setDate(week.getDate() + 7));
  }
}
